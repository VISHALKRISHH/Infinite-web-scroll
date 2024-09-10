import React, { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    border: "1px solid green",
    margin: 12,
    padding: 8,
};

const App = () => {
    const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (dataSource.length < 200) {
            // Simulate an API call
            setTimeout(() => {
                setDataSource(dataSource.concat(Array.from({ length: 20 })));
            }, 500);
        } else {
            setHasMore(false);
        }
    };

    return (
        <div className="App">
            <p>Title: <b>Infinite Scroll</b></p>
            <div id="parent" style={{ height: 500, overflow: 'auto' }}>
                <InfiniteScroll
                    dataLength={dataSource.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<p>Loading...</p>}
                    endMessage={<p>You are all set!</p>}
                    scrollableTarget="parent"
                >
                    {dataSource.map((item, index) => {
                        return (
                            <div key={index} style={style}>
                                This is a div #{index + 1} inside infinite scroll
                            </div>
                        );
                    })}
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default App;
