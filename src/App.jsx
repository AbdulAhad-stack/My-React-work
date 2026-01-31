
import React from 'react'
import Card from './components/Card.jsx'
const jobs = [
  {
    companyName: "Google",
    companyLogo: "https://cdn.freebiesupply.com/images/thumbs/2x/google-logo.png",
    tag1: "Full Time",
    tag2: "Remote",
    payOffer: "$120k–$160k",
    location: "Mountain View, CA",
    postOffered: "Software Engineer",
    posted: "2 days ago",
  },
  {
    companyName: "Apple",
    companyLogo: "https://cdn.freebiesupply.com/images/thumbs/2x/apple-logo.png",
    tag1: "Full Time",
    tag2: "On-site",
    payOffer: "$130k–$170k",
    location: "Cupertino, CA",
    postOffered: "iOS Developer",
    posted: "1 day ago",
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://cdn.freebiesupply.com/images/thumbs/2x/microsoft-logo.png",
    tag1: "Full Time",
    tag2: "Hybrid",
    payOffer: "$115k–$150k",
    location: "Redmond, WA",
    postOffered: "Cloud Engineer",
    posted: "3 days ago",
  },
  {
    companyName: "Amazon",
    companyLogo: "https://cdn.freebiesupply.com/images/thumbs/2x/amazon-logo.png",
    tag1: "Full Time",
    tag2: "On-site",
    payOffer: "$110k–$155k",
    location: "Seattle, WA",
    postOffered: "Backend Developer",
    posted: "5 days ago",
  },
  {
    companyName: "Meta",
    companyLogo: "https://i.pinimg.com/1200x/70/f9/36/70f936294a1f0f3949a9205df9340d5e.jpg",
    tag1: "Full Time",
    tag2: "Remote",
    payOffer: "$125k–$165k",
    location: "Menlo Park, CA",
    postOffered: "Frontend Engineer",
    posted: "2 days ago",
  },
  {
    companyName: "Netflix",
    companyLogo: "https://i.pinimg.com/1200x/ef/06/d3/ef06d3d30cab1504da280bfacbaf4fad.jpg",
    tag1: "Full Time",
    tag2: "Remote",
    payOffer: "$140k–$180k",
    location: "Los Gatos, CA",
    postOffered: "Platform Engineer",
    posted: "4 days ago",
  },
  {
    companyName: "Tesla",
    companyLogo: "https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
    tag1: "Full Time",
    tag2: "On-site",
    payOffer: "$120k–$160k",
    location: "Austin, TX",
    postOffered: "Embedded Systems Engineer",
    posted: "6 days ago",
  },
  {
    companyName: "NVIDIA",
    companyLogo: "https://cdn.freebiesupply.com/images/thumbs/2x/nvidia-logo.png",
    tag1: "Full Time",
    tag2: "Hybrid",
    payOffer: "$135k–$175k",
    location: "Santa Clara, CA",
    postOffered: "AI Software Engineer",
    posted: "1 day ago",
  },
];



const App = () => {
  return (
    <div className="main">
    {jobs.map(function(elem){
  return <Card pic={elem.companyLogo} name={elem.companyName} location={elem.location} payoffer={elem.payOffer} postofferred={elem.postOffered} date={elem.posted} tag1={elem.tag1} tag2={elem.tag2} />
    })}
    </div>
  )
}
export default App
 