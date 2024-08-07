import React from 'react'
import axios from '../api/TddApi';

export default function TddListUsers({renderTddListUsers,onTddDelete}) {
    console.log("TddListUsers:",renderTddListUsers);
    //hiển thị dữ liệu
    let tddElementUsers = renderTddListUsers.map((tddUsers,index)=>{
        return(
            
                <tr key={index}>
                    <th>{tddUsers.id}</th>
                    <th>{tddUsers.UserName}</th>
                    <th>{tddUsers.PassWord}</th>
                    <th>{tddUsers.Email}</th>
                    <th>{tddUsers.Phone}</th>
                    <th>
                        <button className='btn btn-danger' onClick={()=>tddhandleDelete(tddUsers)}>Xoa</button>
                    </th>
                </tr>
            
        )
    })
    const tddhandleDelete= async (param)=>{
        if(window.confirm('bạn có muốn xóa không?')){
            const tddRes =await axios.delete("tddUsers/"+param.id);
        }
        onTddDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>UserName</th>
                    <th>PassWord</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tddElementUsers}
            </tbody>
        </table>
        </div>
    </div>
  )
}
