import React, { useState } from 'react';
import './App.css';
import Channel from './models/channel';
import channelList from './list';

const renderLine = (channel : Channel) => (
  <tr>
    <td>{channel.label}</td>
    <td>{channel.country}</td>
  </tr>
)

const PageBar =({pages, setPage , page }:{pages: number, setPage: any, page: number}) => {

  //@ts-ignore
  let pageArr = [...Array(pages).keys()]

  return <div style={{flexDirection: "row" }}>
    
    <button onClick={() => setPage(page-1)} disabled={page == 0} >{"<<"}</button>
    {pageArr.map((x) => (<button onClick={() => setPage(x)} disabled={page == x}>{x+1}</button>))}
    <button onClick={() => setPage(page+1)} disabled={page == pages-1} >{">>"}</button>
    
    </div>

}


function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <table id="channel">
          <tr>
            <th>Channel</th>
            <th>Country</th>
          </tr>
          {channelList.map((x) => renderLine(x)).slice(15*(page),15*(page+1) )}
        </table>
        {/* <button onClick={()=> setPage(page+1)} >Next Page</button> */}

        <pre>Page {page+1} of {Math.ceil(channelList.length /15) }</pre>
        <PageBar page={page} pages={Math.ceil(channelList.length /15)} setPage={setPage} />
      </header>
    </div>
  );
}
export default App;
