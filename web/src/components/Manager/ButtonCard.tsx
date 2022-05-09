import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from "@mui/material";

import "./Add.css";

export default function ButtonCard({ name, to }: { name: string; to: string }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Add
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions className="action">
        <Button size="large" style={{ textTransform: "none" }}>
          <Link href={to}>Add</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
