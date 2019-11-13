$(() => {
    let url = new URLSearchParams(document.location.href);
    let postID = url.get("postid");
    $("body").append(`
        <script>
            $(() =>
                tFeeds_editPost_openDialog("${postID}")
            );
        </script>
    `);
});