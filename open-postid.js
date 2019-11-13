$(() => {
    let url = new URLSearchParams(data.url);
    let postID = url.get("postid");
    $("body").append(`
        <script>
            $(() =>
                tFeeds_editPost_openDialog("${postID}")
            );
        </script>
    `);
});