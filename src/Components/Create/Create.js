import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import { LoadingContext } from '../../store/loaderContext';
import Loader from '../Loader/loader';


const Create = () => {
  const [name,setName] = useState('')
  const [category,setCategory] = useState('')
  const [price,setPrice] = useState('')
  const [image,setImage] = useState('')
 
  const history = useHistory()
  const {load,setLoad} = useContext(LoadingContext)
  const {firebase} = useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  
  const date = new Date()
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoad(true)
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          image: url,
          userId : user.uid,
          createdAt :date.toDateString()
        }).then(()=>{
          setLoad(false)
          history.push('/')
        })

      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        {load && <Loader/>}
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              type="text"
              id="fname"
              name="Name"
              
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              type="text"
              id="fname"
              name="category"
              
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"  value={price}
              onChange={(e)=>{setPrice(e.target.value)}} type="number" id="fname" name="Price" />
            <br />
       
          <br />
          <img alt="" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' }></img>
          
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
       
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
