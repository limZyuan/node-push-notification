console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(`Push received...`, data);
  self.registration.showNotification(data.title, {
    body: "Notified by Me!",
    icon:
      "https://images.unsplash.com/photo-1533794299596-8e62c88ff975?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
  });
});
