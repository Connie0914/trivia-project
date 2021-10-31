import { NextPage } from 'next';
import { Button } from '../components/Button'
import { useState, useEffect } from 'react';
import { db } from 'service/firebase';

const Index: NextPage = () => {
  const [users, setUsers] = useState([{id: "", username: ""}]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const unSub = db.collection("users").onSnapshot((snapshot)=> {
      console.log(`username = ${snapshot.docs}`);
      setUsers(
        snapshot.docs.map((doc) => ({id: doc.id, username: doc.data().username}))
      );
    });
    return () => unSub();
  }, []);

  return (
    <>
      <h1 className="italic font-bold">Welcome!</h1>
      <p>Hello~</p>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Button</Button>

      {users.map((user) => 
      <h3 key={user.id}>{user.username}</h3>
      )}
    </>
  )
};

export default Index;
