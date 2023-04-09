import React from 'react'

function Banner() {
  return (
    <div className="max-w-[1200px] h-full mx-auto p-4 overflow-x-scroll flex gap-5">
      <img
        className="rounded-3xl w-5/6"
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <img
        className="rounded-3xl w-5/6"
        src="https://images.unsplash.com/photo-1531256379416-9f000e90aacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <img
        className="rounded-3xl w-5/6"
        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <img
        className="rounded-3xl w-5/6"
        src="https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default Banner