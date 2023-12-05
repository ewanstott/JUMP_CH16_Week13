const rootRef = document.getElementById("root");

const end = new Date(Date.now() + 10000).getTime();

let timer = setInterval(() => {
  const distance = end - Date.now();

  if (distance <= 0) {
    rootRef.innerHTML = "All done!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)); //1 day
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  rootRef.innerHTML = `${days} days, ${hours} hours, ${minutes} mins, ${seconds} secs`;
}, 1000);
