


import { tiger, END_POINT  } from './lib/index.js'







async function renderUserList(){

  try{

    const { data } = await tiger.get(END_POINT);

    data.forEach(({name,email})=>{
      console.log( name, email );
    })
  }
  catch{

    console.error('error!');
  }
}


renderUserList()






















