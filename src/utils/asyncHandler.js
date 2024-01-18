    //  this function work as a wrapper to my function that will deal with async
 export const asyncHandler = (func) => {
           
        async (req,res,next) => {

        await Promise.resolve(func(req,res,next)).catch((error)=> next(error))

        }

     }


