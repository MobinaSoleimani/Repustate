
import React, { useState, useEffect } from 'react';

const Keywords = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/d.json');
            const data = await response.json();
            console.log(data);
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
 
        fetchData();
      }, []);

const x=data.map(user => (user.polarity))
        return (
        <div>
        
        </div>
        )
}
export default Keywords;