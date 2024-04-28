$(document).ready(function () {
  var employeeData = [
    {
      image: "https://i2.cinestaan.com/image-bank/1500-1500/95001-96000/95729.jpg",
      name: "Ankitha",
      post: "Have We Met? I am Ankitha. Today is my birthday!",
      likes: 4,
      likedby: "Raja,Hari,Geetha,John",
      comments: [
        { comment: "Happy Birthday!", commentedby: "Raja" },
        {
          comment:
            "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!",
          commentedby: "Hari",
        },
        {
          comment: "Happy Birthday! Have a great year ahead",
          commentedby: "Geetha",
        },
      ],
    },

    {
      image: "https://castyou-website.sgp1.digitaloceanspaces.com/2019/11/IMG_3655.jpg",
      name: "Aarush",
      post: "Have We Met? I am Aarush. Today is my birthday!",
      likes: 12,
      likedby: "Raja,Hari,Geetha,John",
      comments: [
        { comment: "Happy Birthday!", commentedby: "Raja" },
        {
          comment:
            "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!",
          commentedby: "Hari",
        },
        {
          comment: "Happy Birthday! Have a great year ahead",
          commentedby: "Geetha",
        },
        { comment: "Happy Birthday!", commentedby: "Shiv Ram" },
        {
          comment:
            "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!",
          commentedby: "Russel",
        },
        {
          comment: "Happy Birthday! Have a great year ahead",
          commentedby: "S Iyer",
        },
        { comment: "Happy Birthday!", commentedby: "S Sharma" },
        {
          comment:
            "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!",
          commentedby: "Vishwanath",
        },
        {
          comment: "Happy Birthday! Have a great year ahead",
          commentedby: "Ramakant",
        },
        { comment: "Happy Birthday!", commentedby: "S Ahmed" },
      ],
    },

    {
      image: "https://th.bing.com/th/id/OIP.mDOaqgMQG-n3xF0Z611M9gHaFg?rs=1&pid=ImgDetMain",
      name: "Sushmita",
      post: "Have We Met? I am Sushmita. Today is my birthday!",
      likes: 0,
      likedby: "Raja,Hari,Geetha,John",
      comments: [
        // { comment: "Happy Birthday!", commentedby: "Raja" },
        // {
        //   comment:
        //     "Wishing you a year ahead filled with happiness and success! Day to shine! Cheers to another year!",
        //   commentedby: "Hari",
        // },
        // {
        //   comment: "Happy Birthday! Have a great year ahead",
        //   commentedby: "Geetha",
        // },
      ],
    },
    // Add more employees here
  ];

  // Function to create a post element
  function createPost(employee) {
    var postHTML = `
          <div class="post">
            <img src="${employee.image}" width="300" class="empImage"  alt="${
      employee.name
    }" class="img-fluid">
            <h4>${employee.name}</h4>
            <p>${employee.post}</p>
            <button class="like-btn btn btn-primary">Like (${
              employee.likes
            })</button>
            <button class="comment-btn btn btn-info">Comment (${
              employee.comments.length
            })</button>
            <div class="comments">
              <ul class="list-group">
                ${employee.comments
                  .map(
                    (comment) =>
                      `<li class="list-group-item">${comment.commentedby}: ${comment.comment}</li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="comment-section">
              <input type="text" class="form-control comment-input mt-2" placeholder="Write a comment...">
              <button class="add-comment btn btn-success ps-4 pt-2 pb-2 pe-4 mt-2">Add Comment</button>
            </div>
          </div>
        `;
    return postHTML;
  }

  // Function to render all posts
  function renderPosts() {
    var feed = $("#feed");
    feed.empty();
    employeeData.forEach(function (employee) {
      feed.append(createPost(employee));
    });
  }

  // Initial render
  renderPosts();

  // Event listeners
  $("#feed").on("click", ".like-btn", function () {
    var post = $(this).closest(".post");
    var index = $(".post").index(post);
    employeeData[index].likes++;
    $(this).text(`Like (${employeeData[index].likes})`);
  });

  $("#feed").on("click", ".comment-btn", function () {
    $(this).closest(".post").find(".comment-section").toggle();
  });

  $("#feed").on("click", ".add-comment", function () {
    var post = $(this).closest(".post");
    var index = $(".post").index(post);
    var commentInput = post.find(".comment-input");
    var comment = commentInput.val();
    if (comment.trim() !== "") {
      employeeData[index].comments.push({
        comment: comment,
        commentedby: "You",
      });
      commentInput.val("");
      renderPosts();
    }
  });
});
