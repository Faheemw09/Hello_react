// <!-- using react to create hello world -->

 


            {/* //   create h1 tage in React                         */}
   const heading= React.createElement("h1",{id:"heading"},"hello world from react!");
   console.log(heading)
   //we will get object...heading which is react element and  react elemt is normal js object
   //   create aroot in React using react dom  and is resposible  for assigning root to react 
//    const root=  ReactDOM.createRoot(document.getElementById("root"))
//    root.render(heading  )
// render converts this object and put it in the form of h1 tag    

//   React.createElement ==>creates the js Object



// nested html in React   

{/* <div id="parent">
<div id="child">
    <h1>Hello i am h1 tag</h1>
    </div>

    </div> */}

    // how to create bu using React

    // const parent=React.createElement("div",{id:"parent"},
  
    
    // React.createElement("div",{id:"child"},React.createElement("h1",{},"hello i am h1 tag  "))
    // )
    // console.log("parent",parent)
    // const root=  ReactDOM.createRoot(document.getElementById("root"))
    // root.render(parent  )


    // nested html in React    another example adding one more children 

{/* <div id="parent">
<div id="child"> 
    <h1>Hello i am h1 tag</h1>
    <h2>ima h2 tag </h2>     this sbling og h1
    </div>

    </div> */}


    const parent=React.createElement("div",{id:"parent"},
  
    
    React.createElement("div",{id:"child"},
    // give here array of children
    
   [React.createElement("h1",{},"hello i am h1 tag  "),
   React.createElement("h2",{},"hello i am h2  tag  ")])
    )
    console.log("parent",parent)
    const root=  ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent  )


//     supoose we hve h1 tag already in root like this
//     <body>
// <div id="root">
//     <h1>hello</h1>
// </div>

//         </body>

// in html page it will by replcaed by the root.render(parent ) and on don we get parent code print