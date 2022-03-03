import Task from '../models/Task';

export const renderTask = async(req, res) => {
    try{
        const tasks = await Task.find().lean()

        res.render("index", {tasks: tasks });
    }catch (error){
        console.log(error);
    }

};

//ADD TASK
export const addTask = async(req,res) =>{

    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  }

  //RENDER EDIT TASK

export const renderTaskEdit = async (req, res) => {

    try{

    const task = await Task.findById(req.params.id).lean()
    res.render("edit", {task});
    }catch (error){
    console.log(error);
    }
}
//EDIT
export const editTask = async(req, res) =>{

    const {id} = req.params

    await Task.findByIdAndUpdate(id, req.body);
    res.redirect('/');
}
//DELETE
export const deleteTask = async (req, res) =>{
    const {id} = req.params;
    await Task.findByIdAndDelete(id);

    res.redirect("/");
}
//TOGGLE
export const toggleTask = async(req, res) =>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect('/')
}