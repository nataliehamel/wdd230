const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)

    if (today === 1 || today === 2) { // Monday or Tuesday
      const banner = document.getElementById('banner');
      banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
    }