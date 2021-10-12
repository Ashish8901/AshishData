import React from 'react'

const Userpost = () => {




    return (
        <>
            <div className="input-group">
  <span className="input-group-text">Post Here</span>
  <textarea className="form-control" aria-label="With textarea" ></textarea>
</div>
<div><button type="button" className="btn btn-success">Success</button></div>

<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href=" ">Action</a></li>
    <li><a class="dropdown-item" href=" ">Another action</a></li>
    <li><a class="dropdown-item" href=" ">Something else here</a></li>
   
    <li><a class="dropdown-item" href=" ">Separated link</a></li>
  </ul>
</div>
        </>
    )
}

export default Userpost
