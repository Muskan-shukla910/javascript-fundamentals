const obj = {
  name: "JS",
  arrow: () => {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj.arrow();