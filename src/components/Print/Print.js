import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Print({ print }) {
  const artist = print.people.find((person) => person.role === "Artist")?.name;
  return (
    <>
     <Card sx={{ maxWidth: 350, minWidth: 200, margin: '10px' }}>
      <CardMedia
        component="img"
        height="200"
        image={print.primaryimageurl}
        alt={print.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {artist ? artist : "Unknown artist"}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        {print.title ? print.title : "No Title Available"}
        </Typography>
        <Typography variant="h7" color="text.secondary">
        {print.dated ? print.dated : "No Date Available"}
        </Typography>
      </CardContent>     
    </Card>   
    </>
  );
}
