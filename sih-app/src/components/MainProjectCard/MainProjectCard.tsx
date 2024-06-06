import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

interface Props {
  id: string;
  title: string;
  description: string;
  teamMembers: string[];
  date: string;
  likes: string;
  bookmarks: string;
  citations: string;

}

const MainProjectCard = (props: Props) => {
    const router=useRouter();
  return (
    <Box
    onClick={()=>{router.push(`/projects/${props.id}/view`)}}
      sx={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)',
        border: '1px solid #dedddd',
        margin: 'auto',
        padding: 3,
        borderRadius: 2,
        mb: 2,
        cursor:'pointer'
       
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold',fontSize: '1.5rem',paddingBottom:'10px',color: 'black' }}> {/* Increased size and made bold */}
         

              {props.title}
           
        
        </Typography>


      </Box>
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        {props.teamMembers && props.teamMembers.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {props.teamMembers.map((member, index) => (
              <Typography variant="body1" component="a" key={index} >
                {member}{index < props.teamMembers.length - 1 && <span style={{ margin: '0 5px' }}>&middot;</span>}
              </Typography>
            ))}
          </Box>
        )}
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {props.description}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        
          color:'grey'
        }}
      >
        <Typography variant="body1">Published on {props.date}</Typography>
        <Typography variant="body1" sx={{ fontWeight: '500' }}><span style={{color:"#000000",fontSize:`1.2rem` }}>{props.likes}</span> Likes</Typography>
        <Typography variant="body1" sx={{ fontWeight: '500' }}><span style={{color:"#000000",fontSize:`1.2rem`  }}>{props.bookmarks} </span> Bookmarks</Typography>
        <Typography variant="body1" sx={{ fontWeight: '500' }}><span style={{color:"#000000",fontSize:`1.2rem`  }}>{props.citations} </span>Citations </Typography>
      </Box>
    </Box>
  );
}

export default MainProjectCard ;

