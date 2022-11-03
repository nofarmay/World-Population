const fetchData = async () => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
   // {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     // city: 'haifa',
    //     country: 'israel'
    //   }),
    // });
    
    const data = await res.json();
    console.log(data);
  };
  fetchData();