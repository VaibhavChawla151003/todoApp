import React ,{useState,useEffect} from 'react'
import {Form, Input, Modal, Table, message} from 'antd'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import {EditOutlined, CheckCircleOutlined} from '@ant-design/icons'
import "../styles/HomePagestyles.css"
import Spinner from '../components/Spinner'
const HomePage = () => {
  const [showModal,setShowModal]=useState(false);
  const [loading,setLoading] = useState(false);
  const [allTask,setAllTask]=useState([]);
  const [editable,setEditable] = useState(null) 

   //table data 
   const columns = [
    {
      title:'Title',
      dataIndex:'title'
    },
    {
      title:"Actions",
      render :(text,record) => (
        <div>
          <EditOutlined onClick={() => {
            setEditable(record)
            setShowModal(true)
          }}/>
          <CheckCircleOutlined className='mx-2' onClick={() => {handleDelete(record)}}/>
        </div>
      )
    },
   ]


  //useEffect hook
  useEffect(()=>{
  const getAllTask = async ()=>{
    try{
       const user = JSON.parse(localStorage.getItem('user'))
       setLoading(true)
       const res = await axios.post('/api/v1/tasks/get-task',{userid:user._id})
       setLoading(false)
       setAllTask(res.data)
       console.log(res.data)
    }catch(error){
       console.log(error)
       setLoading(false)
       message.error('Fetch issue with tasks')
    }
  };
    getAllTask();
    
  },[]);

  const handleDelete = async(record) => {
    try{
      setLoading(true)
      await axios.post("/api/v1/tasks/delete-task",{taskId:record._id})
      setLoading(false)
      message.success("Task Deleted")
      window.location.reload()
    }catch(error){
      setLoading(false)
      console.log(error)
      message.error('Unable to delete the task')
    }
  };
  //form handling
  const handleSubmit = async (values) =>{
      try{
         const user = JSON.parse(localStorage.getItem('user'))
         setLoading(true)
         if(editable){
          await axios.post('/api/v1/tasks/edit-task',{payload:{
            ...values,
            userId:user._id
          },taskId:editable._id
        }) ;
          message.success('Task Edited Successfully')
          window.location.reload()
         }else{
          await axios.post('/api/v1/tasks/add-task',{...values,userid:user._id})  
         message.success('Task Added Successfully')
         window.location.reload()
         }
         setShowModal(false)
         setEditable(null)
      }catch(error){
        setLoading(false)
        message.error('Failed to add Task')
      }
  }
  return (
    <Layout>
       {loading && <Spinner/>}
       
       <div className='content'>
          <Table className="tabledata" columns={columns} dataSource={allTask} />
          <div className='filters'>
         <div>
           <button className='add btn btn-primary' onClick={()=>setShowModal(true)}>Add New</button>
         </div>
       </div>
       </div>
       
       <Modal title= {editable ? 'Edit Task' : 'Add Task'}  open={showModal} onCancel={()=> setShowModal(false)} footer={false}>
        <Form layout='vertical' onFinish={handleSubmit} initialValues={editable}>
            <Form.Item label="Title" name="title">
               <Input type='text'/>
            </Form.Item>
            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-primary add'>
                {" "}
                SAVE
              </button>
            </div>
        </Form>
       </Modal>
    </Layout>
  )
}

export default HomePage