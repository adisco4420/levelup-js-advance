const info = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"}
for (const key in info) {
    const element = info[key];
    console.log(element);
}