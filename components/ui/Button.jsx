const Button = () => {
  const text = "Add to cart";

  return (
    <button className="flex justify-center items-center h-11 border text-lg bg-black text-white border-black px-2">
      {text}
    </button>
  );
};

export default Button;
