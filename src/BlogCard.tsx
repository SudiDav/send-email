import { Card, CardContent, Typography } from '@mui/material';

interface BlogCardProps {
  title: string;
  content: string;
}

const BlogCard = ({ title, content }: BlogCardProps) => (
  <Card sx={{ marginBottom: '15px' }}>
    <CardContent>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body2'>{content}</Typography>
    </CardContent>
  </Card>
);

export default BlogCard;
