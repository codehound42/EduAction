import React, { useState } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import EventOne from '../../components/event/EventOne';
import EventData from '../../data/event/EventData.json';
import loadinggif from '../../assets/images/loading.gif';


const EventList = () => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [apidata, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // This function will be called when the form is submitted
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        setIsLoading(true);
        fetch('http://localhost:8000/api/yt_link/', { // Replace with your actual endpoint
            // mode: 'cors',
            method: 'POST', // POST

            body: JSON.stringify(youtubeLink)
        })
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                // Handle the API response data here
                console.log(apidata);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    };

    return (
        <>
            <SEO title="Event List" />
            <Layout>
                <div className="containersteps">
                    <h2 className="stepsname">Step 1: Upload your YouTube link</h2>
                    <form onSubmit={handleSubmit}> {/* Add the onSubmit handler here */}
                        <div className="form-group">
                            <div className="wrapper2">
                                <input
                                    type="url"
                                    id="youtubelink"
                                    className="linkinput form-control form-control-lg"
                                    placeholder="Enter YouTube link"
                                    pattern="https://.*"
                                    required
                                    value={youtubeLink}
                                    onChange={e => setYoutubeLink(e.target.value)} // Update the state when input changes
                                />
                            </div>
                            <div className="wrapper2">
                                <button type="submit" className="buttons1">Submit</button>
                                {isLoading && <img src={loadinggif} alt="Loading..." className="loading"/>} {/* Conditional rendering of loading GIF */}
                            </div>
                            <div>
                                <h3 className="text2">Pay attention:</h3>
                                <h3 className="text3">• Make sure it is a Youtube link</h3>
                                <h3 className="text3">• Make sure you add https://</h3>
                                <h3 className="text3">• Click submit when ready</h3>
                            </div>
                            
                        </div>
                    </form>
                </div>

<div>{apidata}</div>


                {!isLoading && <div className="containersteps2">
                    <h2 className="stepsname">Step 2: Your AI Outcome</h2>
                    
                </div>}

            </Layout>
        </>
    )
}

export default EventList;