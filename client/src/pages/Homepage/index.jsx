import { useState } from "react";
import Button from "~/components/Button";

const Homepage = () => {
  return (
    <div>
      ana sayfa
      <Button variant="default" size="small">
        deneme
      </Button>
      <Button variant="default" size="medium">
        deneme
      </Button>
      <Button variant="default" size="large">
        deneme
      </Button>
    </div>
  );
};

export default Homepage;
