import React from "react"
import "./OurTeam.css"
import AliHassani from "./img/Ali-Hassani.png"
import KevinLee from "./img/Kevin-Lee.png"
import ImaliDias from "./img/Imali-Dias.png"
import EmilyChin from "./img/Emily-Chin.png"
import WilliamHebblewhite from "./img/William-Hebblewhite.png"
import SharniSujatha from "./img/Sharni-Sujatha.png"
import RaymondCorrigan from "./img/Raymond-Corrigan.png"
import AkshatArora from "./img/Akshat-Arora.png"
import MasonWilliamAllcorn from "./img/Mason-William-Allcorn.png"
import data from "../../../../src/assets/project.json"

// import PlaceholderImg from "./img/placeholder.png";

import PlaceholderImg from "./img/Mason-William-Allcorn.png";



export default function OurTeamComponent() {
  return <div className="our-team">
    {/* <h2 className="our-team-heading">
      Our Teams
    </h2>
    <div className="directors-background">
      <div className="directors">
        <h3 className="our-directors-heading">Board of Directors</h3>
        <div className="our-board-directors-members">
          <div className="our-grid-directors"><img src = {AliHassani}/><h4>Ali Hassani</h4></div>
          <div className="our-grid-directors"><img src = {KevinLee}/><h4>Kevin Lee</h4></div>
          <div className="our-grid-directors"><img src = {ImaliDias}/><h4>Imali Dias</h4></div>
        </div>
      </div>
    </div>
    <h2 className="our-students-heading">Student Leadership</h2>
    <div className="our-student-directors-members">
      <div className="our-grid-students"><img src = {EmilyChin}/><div><h4>{data.leaders[1].name}</h4><p>{data.leaders[1].team}</p></div></div>
      <div className="our-grid-students"><img src = {WilliamHebblewhite}/><div><h4>{data.leaders[0].name}</h4><p>{data.leaders[0].team}</p></div></div>
      <div className="our-grid-students"><img src = {SharniSujatha}/><div><h4>{data.leaders[4].name}</h4><p>{data.leaders[4].team}</p></div></div>
      <div className="our-grid-students"><img src = {RaymondCorrigan}/><div><h4>{data.leaders[2].name} </h4><p>{data.leaders[2].team}</p></div></div>
      <div className="our-grid-students"><img src = {AkshatArora}/><div><h4>{data.leaders[3].name}</h4><p>{data.leaders[3].team}</p></div></div>
      <div className="our-grid-students"><img src = {MasonWilliamAllcorn}/><div><h4>{data.leaders[5].name}</h4><p>{data.leaders[5].team}</p></div></div>
      </div> */}


    {/* <div className="our-team"> */}


    <h2 className="our-team-heading">Leadership Team</h2>
      <div className="our-team-members our-team-members-leadership">
        <div className="our-grid-members"><h4>Kevin Lee</h4><p>Acting Director</p></div>
        <div className="our-grid-members"><h4>Ella Zarandi - Avinash Maurya</h4><p>Company Leaders</p></div>
      </div>

      <h2 className="our-team-heading">Student Leadership</h2>
      <div className="our-team-members">
        <div className="our-grid-members"><h4>Ella Zarandi</h4><p>IOT</p></div>
        <div className="our-grid-members"><h4>Hilal Irshad</h4><p>VR</p></div>
        <div className="our-grid-members"><h4>The Tung Truong</h4><p>Mobile</p></div>
        <div className="our-grid-members"><h4>Mark Telley - Ella Zarandi</h4><p>Data/AI</p></div>
        <div className="our-grid-members"><h4>Avinash Maurya - Brian Dang - Yiannis Doulgerakis</h4><p>Web/Design</p></div>
        <div className="our-grid-members"><h4>Avinash Maurya - Caitlin Parker - Nasim Emadi</h4><p>Cyber</p></div>
        <div className="our-grid-members"><h4>Avinash Maurya - Adhish Anand - Arjodh Singh</h4><p>DevOps</p></div>
      </div>

      <h2 className="our-team-heading">Team Members</h2>

      <h3 className="our-team-heading our-team-heading-type">IOT</h3>
      <div className="our-team-members">
        {["Ella Zarandi", "William Djojodiredjo", "Jarrod Yong", "Ethan Benjamin", "Thomas Morgan", "Momin Khalid Butt", "Ahmad Riaz", "Haris Sajjad"].map((member) => (
          <div className="our-grid-members"><h4>{member}</h4></div>
        ))}
      </div>

      <h3 className="our-team-heading our-team-heading-type">VR</h3>
      <div className="our-team-members">
        {["Hilal Irshad", "Jarrod Yong", "Steven Markris", "Daniel Isla", "Jiahao Feng"].map((member) => (
          <div className="our-grid-members"><h4>{member}</h4></div>
        ))}
      </div>

      <h3 className="our-team-heading our-team-heading-type">DevOps</h3>
      <div className="our-team-members">
        {["Arjodh Singh", "Astifo Paul", "Adhish Anand", "Steve Lee", "Sam Titus Menacheery"].map((member) => (
          <div className="our-grid-members"><h4>{member}</h4></div>
        ))}
      </div>

      <h3 className="our-team-heading our-team-heading-type">Data/AI</h3>
      <div className="our-team-members">
        {["Mark Telley", "Ella Zarandi", "Prastut Sindhuja Manduru", "Tianqi Liang", "Saeed Alnaqeeb", "Miriam Llauce Cotrina", "Tejas Varun Baskar", "Prastut Sapkota", "Kunal Tripathi", "Samuel Borough", "Kamau"].map((member) => (
<div className="our-grid-members"><h4>{member}</h4></div>
))}
</div>
<h3 className="our-team-heading our-team-heading-type">Cyber</h3>
  <div className="our-team-members">
    {["Adam Bainey", "Carla Estella", "Caitlin Parker", "Stephen Tobechukwu", "Tahlea Grant", "Jikuan Liu", "Ash Fricker", "Melvin Manoj", "SANJAY MEDIKONDURU", "Nasim Emadi", "Harshana Thilanga"].map((member) => (
      <div className="our-grid-members"><h4>{member}</h4></div>
    ))}
  </div>

  <h3 className="our-team-heading our-team-heading-type">Mobile</h3>
  <div className="our-team-members">
    {["The Tung Truong", "Seth Tan", "Manusha Umayanga", "Raveen Yashod", "Pengyu Xiao"].map((member) => (
      <div className="our-grid-members"><h4>{member}</h4></div>
    ))}
  </div>

  <h3 className="our-team-heading our-team-heading-type">Web/Design</h3>
  <div className="our-team-members">
    {["Brian Dang", "Evan Mitropoulos", "Nicolas Tomas", "Nicholas James", "Harsh Patel", "Robert Bajan", "Enock Nyaundi", "Hokky Kurnia Gondo Kusumo", "Qianhui Meng", "Jack Cousens", "Yesitha Liyanage", "Avinash Maurya", "Han XIA", "Anno Gomes", "Mohit Jurani", "Yiannis Doulgerakis"].map((member) => (
      <div className="our-grid-members"><h4>{member}</h4></div>
    ))}
  </div>
);

  </div>;
}
