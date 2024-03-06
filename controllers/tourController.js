import Tour from '../models/Tour.js'


//create new tour
export const createTour = async (req,res)=>{
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save(); 
        res
            .status(200)
            .json({
                success:true, 
                message:'Successfully created', 
                data:savedTour,
            }); 
    } catch (error) {
        res
            .status(500).
            json({success:false, message:'Failed to create. Try again', data:savedTour}); 
    }
};

//update tour
export const updateTour = async (req,res) => {
    
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        },{new:true}) 
    } catch (error) {
        
    }
};

//delete tour
export const deleteTour = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
};

//getSingle tour
export const getSingleTour = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
};

//getAll tour
export const getAllTour = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
};