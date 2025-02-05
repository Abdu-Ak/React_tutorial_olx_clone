import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';

import './View.css';
function  View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
   firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(element => {
      setUserDetails(element.data());
    });
   })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.image}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
  {  userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
