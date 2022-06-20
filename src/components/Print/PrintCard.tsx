import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Print } from '../../global/types'

export default function PrintCard({ people, primaryimageurl, description, title, dated }: Print) {
  const artist = people.find((person) => person.role === "Artist")?.name;
  return (
    <>
     <Card sx={{ maxWidth: 350, minWidth: 200, margin: '10px' }}>
      <CardMedia
        component="img"
        height="200"
        image={primaryimageurl}
        alt={description}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {artist ? artist : "Unknown artist"}
        </Typography>
        <Typography variant="h5" color="text.secondary">
        {title ? title : "No Title Available"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {dated ? dated : "No Date Available"}
        </Typography>
      </CardContent>     
    </Card>   
    </>
  );
}
