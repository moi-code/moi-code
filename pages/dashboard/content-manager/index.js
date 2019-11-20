import React,{Component} from 'react'
import MoiDash from '../../../src/components/MoiDash'
import MoiPost from '../../../src/components/MoiPost';
class ContentManager extends Component{
render(){
  return (
    <MoiDash>
      <style jsx>{`
        a {
          color: #000 !important;
        }
        a:hover {
          color: purple !important;
        }
      `}</style>
      <h5>contents managers</h5>
      <MoiPost />
    </MoiDash>
  );
}
}
export default ContentManager