UPDATE
    posts_by_user
SET
    text = '... and Mt. Gumbo was NOT SO easy!!!'
WHERE
    user_id = 11111111 -1111 -1111 -1111 -111111111111
    AND post_id = aaaaaaaa - 5cff - 11ec - be16 - 1fedb0dfd057;

SELECT
    post_id,
    room_id,
    text
FROM
    posts_by_user
WHERE
    user_id = 11111111 -1111 -1111 -1111 -111111111111;

/ / CRU(D) / / DELETE
DELETE FROM
    posts_by_user
WHERE
    user_id = 11111111 -1111 -1111 -1111 -111111111111
    AND post_id = bbbbbbbb - 5cff - 11ec - be16 - 1fedb0dfd057;

DELETE FROM
    posts_by_user
WHERE
    user_id = 55555555 -5555 -5555 -5555 -555555555555
    AND post_id = bbbbbbbb - 5cff - 11ec - be16 - 1fedb0dfd057;

DELETE FROM
    posts_by_room
WHERE
    room_id = '#hiking'
    AND post_id = bbbbbbbb - 5cff - 11ec - be16 - 1fedb0dfd057;