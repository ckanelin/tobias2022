import React, {useState} from "react";
import Graph from "react-graph-vis";
import {tobias} from "./tobias.js";

// 13 Neo
import neo from "./pictures/Cupace20220412184358.png";
// 10 Chef 
import ch from "./pictures/Cupace20220413173733.png";
// 6 Darth
import dv from "./pictures/Cupace20220413174105.png";
// 11 Pepper
import pp from "./pictures/Cupace20220413174710.png";
// 7 v
import v from "./pictures/Cupace20220413175144.png";
// 8 e
import e from "./pictures/Cupace20220413175349.png";
// 14 c
import c from "./pictures/Cupace20220413175819.png";
// 15 t
import t from "./pictures/Cupace20220413180104.png";
// 23 a
import a from "./pictures/Cupace20220413180622.png";
// 9 tob
import tob from "./pictures/IMG-20220211-WA0000 (1).jpg";

const pictures = {
  6: dv,
  7: v,
  8: e,
  9: tob,
  10: ch,
  11: pp,
  13: neo,
  14: c,
  15: t,
  23: a
};

const graph = {
  nodes: [
    { id: 16, group:"invalid"},
    { id: 17, group:"invalid"},
    { id: 18, group:"invalid"},
    { id: 1, group:"invalid"},
    { id: 2, group:"invalid"},
    { id: 3, group:"invalid"},
    { id: 4, group:"invalid"},
    { id: 6, group:"valid"},
    { id: 7, group:"valid"},
    { id: 8, group:"valid"},
    { id: 9, group:"valid"},
    { id: 10, group:"valid"},
    { id: 11, group:"valid"},
    { id: 12, group:"invalid"},
    { id: 13, group:"valid"},
    { id: 14, group:"valid"},
    { id: 15, group:"valid"},
    { id: 19, group:"invalid"},
    { id: 20, group:"invalid"},
    { id: 21, group:"invalid"},
    { id: 22, group:"invalid"},
    { id: 23, group:"valid"},
    { id: 24, group:"invalid"},
    { id: 25, group:"invalid"},
    { id: 26, group:"invalid"},
    { id: 27, group:"invalid"},
    
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4},
    { from: 6, to: 7 },
    { from: 8, to: 9 },
    { from: 7, to: 9 },
    { from: 10, to: 9 },
    { from: 9, to: 11},
    { from: 11, to: 12 },
    { from: 9, to: 13 },
    { from: 9, to: 14},
    { from: 2, to: 11 },
    { from: 14, to: 15 },
    { from: 16, to: 17},
    { from: 16, to: 18 },
    { from: 17, to: 1 },
    { from: 18, to: 1 },
    { from: 19, to: 20 },
    { from: 21, to: 20 },
    { from: 20, to: 22 },
    { from: 20, to: 23 },
    { from: 22, to: 10 },
    { from: 23, to: 8 },
    { from: 23, to: 24 },
    { from: 24, to: 25 },
    { from: 25, to: 26 },
    { from: 27, to: 23 },
  ]
};

const options = {
  nodes:{
    borderWidth: 4,
    size: 200,
    shape: "circle",
    fixed:{
      x: false,
      y: false
    },
    font:{
      color:"#FFFFFF"
    }
  },
  layout: {
    hierarchical: {
      enabled: true,
      sortMethod:"directed",
      levelSeparation: 150,
      treeSpacing: 300,
      nodeSpacing: 200
    }
  },
  edges: {
    arrows:{
      to:{
        enabled:false
      }
    },
    color: {
      color:"#FFFFFF",
      highlight:"#F9FCBA"
    },
    dashes: true,
    selectionWidth: 4,
    width: 3
  },
  height: "95%",
  // width: "95%",
  physics:{
    solver:"hierarchicalRepulsion",
    hierarchicalRepulsion: {
      centralGravity: 0.5,
      springLength: 125,
      springConstant: 0.01,
      nodeDistance: 200,
      damping: 0.09
    },
  },
  groups:{
    valid: {
      color:{
        border:"#E2F0FF",
        background:"#041876",
        highlight:{
          border:"#F9FCBA",
          background:"#041876"
        }
      }
    },
    invalid: {
      color:{
        border:"#f59da0",
        background:"#041876",
        highlight:{
          border:"#f59da0",
          background:"#041876"
        }
      }
    }
  }
}; 

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentTobias, setCurrentTobias] = useState(tobias[9]);
  const [currentPicture, setCurrentPicture] = useState(tob);
  const [bdayModalOpen, setBdayModalOpen] = useState(false);
 
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      if(tobias[nodes[0]]){
        setModalOpen(true);
        setCurrentPicture(pictures[nodes[0]]);
        setCurrentTobias(tobias[nodes[0]]);
      }
    }
  };



  return (
    <div style={{height: "100vh", backgroundColor:"#1D37AD", 
              display: "flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      {bdayModalOpen && <div style={{width:"30vw", height:"25vh", backgroundColor:"white", display:"flex",
             zIndex:9, opacity:"100%", position:"absolute", flexDirection:"column", padding: "40px",
              borderRadius:"2%", justifyContent:"center"}}
            onClick={()=>{setBdayModalOpen(false)}}>
        <div style={{paddingBottom:"20px"}}>
          Happy 27th Birthday Tobias,
        </div>
        <div>
          To the smartest, funniest and most hardworking man I know, you deserve recognition far more than one day a year. I am grateful to have a chance to witness you grow as a person and proud of everything we have overcome together.
          You are an amazing hooman, and I hope you see that too! 
        </div>
        <div style={{paddingTop:"20px"}}>
        To the first of many birthdays,
        </div>
        <div style={{paddingTop:"10px"}}>
          Candy Kane
        </div>
      </div>}
      {modalOpen && <div style={{width:"100vw", height:"100vh", backgroundColor:"black", position:"absolute", display:"flex",
              alignItems:"center", justifyContent:"center", zIndex:9, opacity:"100%"}}
            onClick={()=>{setModalOpen(false)}}>
        <div style={{
          height:"80vh", 
          width:"40vw",
          backgroundColor:"white",  
          zIndex:10, 
          opacity:"100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column"}}>
          <h1>{currentTobias.title}</h1>
          <div style={{margin:"10px"}}>Click Anywhere To Close</div>
          <img src={currentPicture} width="70%"/>
          <div style={{width: "70%", display: "flex"}}>
            <div style={{
              width: "100%", 
              height:"100px", 
              marginTop:"10px",
              marginRight:"5px",
              border:"solid",
              borderWidth:"2px",
              padding:"10px"}}>
                <h3 style={{marginTop:"0px", marginBottom:"5px"}}>
                  Special Abilities:
                </h3>
               {currentTobias.superpowers.map((superpower)=>{
                 return(
                   <div>- {superpower}</div>
                 )
               })}
            </div>
            <div style={{
              width: "100%", 
              height:"100px", 
              marginTop:"10px",
              marginLeft:"5px",
              border:"solid",
              borderWidth:"2px",
              padding:"10px"}}>
                <h3 style={{marginTop:"0px", marginBottom:"5px"}}>
                  Verse Jumping:
                </h3>
               {currentTobias.actions.map((action)=>{
                 return(
                   <div>- {action}</div>
                 )
               })}
            </div>
          </div>
        </div>
      </div> }
      <div style={{height: "60vh",  backgroundColor:"#041876", 
                borderStyle: "solid", borderColor: "white", borderWidth:"5px"}}>
        <div style={{width:"100%"}} onClick={()=>{setBdayModalOpen(!bdayModalOpen)}}>
            <div style={{color: "white", float:"left"}}>4/15/2022</div>
        </div>
        <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <div style={{width:"100%", marginTop: "10px"}}>
            <div style={{color: "white", float:"left", fontSize:"20px"}}>Status: Stable???</div>
        </div>
      </div>
    </div>
  );
}

export default App;
