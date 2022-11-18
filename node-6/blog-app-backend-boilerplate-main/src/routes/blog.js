// const router = require('express').Router();
// const Blog = require('../models/Blog')

// // Your routing code goes here


// router.get('/blog',(req,res)=>{
//     res.json({ok:'blog'})
// })


// module.exports = router;





const router = require('express').Router();//without express.json all request parameters won't work
const Blog = require('../models/Blog')

// Your routing code goes here
router.get('/blog', async (req,res)=>{//get is usually with respect to home page//async and await are used toghther
    try{
        const {page,search}=req.query;//these are the query parameters
        
    const data = await Blog.find({"topic":search}).skip(5*(Number(page)-1)).limit(5);//finding, in search=topic word//limit(5) means maximum blogs per page will be 5//number specifies that page parameter has number in it//skip function gives 5,10,15 like posts on single page
    const data1= await Blog.findById()//result can be found out by id
    console.log(req.query.search)//query parameter is search
    //console.log(req.query)
    res.json(data)//data will be in json object format//initially 5 posts are taken together and displayed
    }catch(e){
        res.send(e)//displays error
    }
    
})

//posting the data
router.post('/blog',  async (req,res)=>{
    try{
      const data=req.body;//req.body is property// it has key value pairs of data//always returns object
      //console.log(data);
      if(data)
      {
        //await Blog.create(data)
        const blog = await Blog.create(req.body);
        // console.log(req.body)
        res.status(200).json({
            status: "Sucess",
            blog
        })
        // res.json({
        //     status :"success",
        //     data})
        
      }
      else{
        res.json({
            status:"failure",
            message:"enter the data"

        })
      }
     
    }catch(e){
        res.send(e.message)
    }
    
})

//updating
router.put('/blog/:id', async (req,res)=>{
    try{
        const id=req.params.id;//updation is done with respect to id//:id is used in url
        console.log(id);
        const data=await Blog.findById(id);
        console.log(data);
        const datatoupdate=req.body;//datatoupdate has the body  regarding which data is tobe updated
        if(data)
        {
            await Blog.findByIdAndUpdate(id,datatoupdate,{
                runValidators:true,//used in updating whether dtabase manipulation is allowed or not
                new:true
            })
            res.json({
                status:"success",
                result:datatoupdate,
            })
        }
        else{
            res.json({
                result:"failure",
                message:"enter valid id"
            })
        }
    }catch(e){
        res.send(e)
    }
    
})

//deleting data
router.delete('/blog/:id', async (req,res)=>{
    try{
        const id=req.params.id;
        console.log(id);
        const data=await Blog.findOne({"_id" : id});//one particular blog with this id is searched waited to get and moved to data variable
        console.log(data);
        if(data)//if data id to be deleted is found
        {
            await Blog.findByIdAndDelete(id);
            const dataAfterDeletion= await Blog.find();
            res.json({
                status:"success",
               dataAfterDeletion
            })
        }
        else{
            res.json({
                result:"failure",
                message:"enter valid id"
            })
        }
    }catch(e){
        res.send(e)
    }
    
})

// // router.get('/blog',(req,res)=>{
// //     res.json({ok:'blog'})
// })


module.exports = router;