/*document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/notes")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
                for(let i=0; i<data.length; i++){
                        const ul = document.getElementById("notes");
                        let li = document.createElement("li");
                        li.textContent = data[i].content
                        ul.appendChild(li)
                }
            document.querySelector('#submit').disabled = true;
        }).catch((err) => {
            console.log(err);
        });
});

document.querySelector("#submit1").addEventListener("click", (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/notes")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.forEach(el=>{
                        const ul = document.getElementById("notes");
                            let li = document.createElement("li");
                            li.textContent = el.content
                            ul.appendChild(li)
                })
                document.querySelector('#submit1').disabled = true;
            }).catch((err) => {
                console.log(err);
            });
    });

    document.querySelector("#submit2").addEventListener("click", (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/notes")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                data.map(el=>{
                        const ul = document.getElementById("notes");
                            let li = document.createElement("li");
                            li.textContent = el.content
                            ul.appendChild(li)
                })
                document.querySelector('#submit2').disabled = true;
            }).catch((err) => {
                console.log(err);
            });
    });
    */

document.querySelectorAll('input[type="submit"]').forEach((el) => {
  if (el.id === "submit") {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("li").forEach((el) => {
        el.remove();
      });
      fetch("http://localhost:3001/notes")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            const ul = document.getElementById("notes");
            let li = document.createElement("li");
            li.textContent = data[i].content;
            ul.appendChild(li);
          }
                  })
        .catch((err) => {
          console.log(err);
        });
    });
  } else if (el.id === "submit1") {
    el.addEventListener("click", (e) => {
            document.querySelectorAll("li").forEach((el) => {
        el.remove();
      });
      e.preventDefault();
      fetch("http://localhost:3001/notes")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((el) => {
            const ul = document.getElementById("notes");
            let li = document.createElement("li");
            li.textContent = el.content;
            ul.appendChild(li);
          });
          
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } else if (el.id === "submit2") {
    el.addEventListener("click", (e) => {
            document.querySelectorAll("li").forEach((el) => {
        el.remove();
      });
      e.preventDefault();
      fetch("http://localhost:3001/notes")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.map((el) => {
            const ul = document.getElementById("notes");
            let li = document.createElement("li");
            li.textContent = el.content;
            ul.appendChild(li);
          });
          
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
});
