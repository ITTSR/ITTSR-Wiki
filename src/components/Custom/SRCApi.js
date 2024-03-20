import React, { useEffect, useState } from 'react';
import {YouTube, Twitch} from 'mdx-embed';
import MayImg from '@site/static/img/May.png'
import CodyImg from '@site/static/img/Cody.png'

const baseUrl = "https://www.speedrun.com/api/v1/"
const gameID = "kdkm3re1"
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'ITTSR-Wiki',
    }
}

function GetAPIInfo(category, level = null) {
    const [data, setData] = useState({});

    useEffect(() => {
        const apiInfo = async () => {
            const response = await fetch(baseUrl + "games/" + gameID + "/records?max=50");
            const responseJson = await response.json();
            console.log(responseJson);
            
            var categoryData = null;
            for (let index = 0; index < responseJson['data'].length; index++) {
                if (category == responseJson['data'][index]['category'] && level == responseJson['data'][index]['level'])
                {
                    categoryData = responseJson['data'][index];
                    console.log("Found matching category: " + category + " and level: " + level);
                    break;
                }
            }

            if (categoryData == null)
            {
                console.log("No matching category found.");
                return;
            }
            
            const players = categoryData['runs'][0]['run']['players'];

            for (let index = 0; index < players?.length; index++) {
                const playerResponse = await fetch(players[index]['uri'], requestOptions);
                const playerResponseJson = await playerResponse.json();
                categoryData['runs'][0]['run']['players'][index] = playerResponseJson['data'];
            }

            setData(categoryData);
            console.log(categoryData);
        };
        apiInfo();
    }, []);

    return data;
}

export default function CurrentWR({category, lobby = "online", level = null}) {

    // Could look up the categories using the game ID instead but whatever, unlikely to change anytime soon
    var categoryID;
    var ilCategoryID;

    switch (category) {
        case "any%":
            categoryID = "rkl9verk"
            ilCategoryID = "n2ye738k"
            break;
        case "inbounds":
            categoryID = "9kvq7jod"
            ilCategoryID = "wk60voxk"
            break;
        case "100%":
            categoryID = "jdzlwp32"
            ilCategoryID = "02q4v8jd"
            break;
        case "solo":
            categoryID = "ndxem8rk"
            ilCategoryID = "9d8o6j32"
            break;
        case "oob":
            categoryID = "zd3v8l82"
            ilCategoryID = "5dw978l2"
            break;
    
        default:
            return;
    }

    var levelID = null;
    switch (level) {
        case "shed":
            levelID = "xd1lpo69"
            break;
        case "tree":
            levelID = "ewp4nvzw"
            break;
        case "roses":
            levelID = "y9m40v19"
            break;
        case "clock":
            levelID = "5wk40vqd"
            break;
        case "snow":
            levelID = "592em1r9"
            break;
        case "garden":
            levelID = "29vngvnd"
            break;
        case "attic":
            levelID = "xd4gpmpd"
            break;
    
        default:
            break;
    }
    

    var lobbyID;
    switch (lobby) {
        case "online":
            lobbyID = "gq7o24yl";
            break;
        case "local":
            lobbyID = "21g694mq";
            break;
        default:
            break;
    }

    const data = GetAPIInfo(level == null ? categoryID : ilCategoryID, levelID);
    const wr = data?.runs?.[0]?.run;
    console.log(wr);

    const convertSecondsToHMSString = (seconds) => {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor((seconds % 3600) / 60)
        const remainingSeconds = seconds % 60

        const hourString = hours > 0 ?  `${hours}h` : ''
        const minuteString = minutes > 0 ? `${minutes}m` : ''
        const secondString = remainingSeconds > 0 ? `${remainingSeconds}s` : ''

        return `${hourString} ${minuteString} ${secondString}`
    }
    const gameTime = convertSecondsToHMSString(wr?.times?.ingame_t);
    const mayPlayer = wr?.players?.[0];
    const codyPlayer = wr?.players?.[1];

    const wrVideoRawUri = wr?.videos?.links?.[wr?.videos?.links?.length - 1]?.uri;
    var embedUrl;
    var skipTo;
    if (wrVideoRawUri?.includes("youtube.com") || wrVideoRawUri?.includes("youtu.be"))
    {
        var index = wrVideoRawUri.lastIndexOf("/");
        var substring = wrVideoRawUri.substring(index + 1);

        if (substring.includes("watch?v="))
        {
            index = substring.lastIndexOf("watch?v=");
            substring = substring.substring(index + 8);
        }

        if (substring.includes("t="))
        {
            index = substring.lastIndexOf("t=");
            skipTo = parseInt(substring.substring(index + 2));
        }
        console.log(substring);
        embedUrl = (
            <YouTube youTubeId={substring} skipTo={{h: 0, m: 0, s: skipTo}}/>
        );
    } 
    else if (wrVideoRawUri?.includes("twitch.tv"))
    {
        var index = wrVideoRawUri.lastIndexOf("/");
        var index2 = wrVideoRawUri.lastIndexOf("?");
        if (index2 == -1)
        {
            index2 = undefined;
        }

        var substring = wrVideoRawUri.substring(index + 1, index2);
        
        console.log(substring);
        embedUrl = (
            <Twitch twitchId={substring} />
        );
    }

    var Output = (
        <div className={'leaderboard'}>
            <h2 style={{marginBottom: '0.5rem', display: 'flex', flexWrap: 'wrap'}}>World Record:&nbsp;<a href={wr?.weblink}>{gameTime}</a></h2>
            <h4 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span style={{marginRight: '-0.2rem'}}>by </span>
                    <img src={MayImg} style={{maxWidth: '20px', marginTop: '-0.35rem', marginRight: '-0.4rem'}}></img>
                    <a href={mayPlayer?.weblink}>{mayPlayer?.names?.international}</a>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <span> and </span>
                    <img src={CodyImg} style={{maxWidth: '20px', marginTop: '-0.35rem', marginRight: '-0.4rem'}}/>
                    <a href={codyPlayer?.weblink}>{codyPlayer?.names?.international}</a>
                </div>
            </h4>
            
            {embedUrl}
        </div>
    )
    

  return Output;
}