// import firebase from 'firebase/app';
// import 'firebase/auth';

// import initFirebase from '../services/firebase';
// import { useState } from 'react';

// initFirebase();

// const provider = new firebase.auth.GoogleAuthProvider();
// // Provider.addScope("...")

export default function Form() {
  // const [authorizing, setAuthorizing] = useState(false);

  // const handleAuthentication = async () => {
  //   setAuthorizing(true);
  // }

  return (
    <form className="bg-white flex flex-col gap-3 ">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="
      "
          id="email"
          // required
          className="border-solid border-2 border-[#000]"
        />
      </div>
      <div className="flex flex-col" >
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="3" className="border-solid border-2 border-[#000]" ></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" id="submit" className="border-solid border-2 border-[#000] bg-[#333] text-[#fff] p-2 rounded-sm cursor-pointer " />
      </div>
    </form>
  );
}
