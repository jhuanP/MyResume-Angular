echo "what update would you like to push to heroku?"

read message

echo "You are wanting to commit" /"$message?/"

read boolean
     
if [ $boolean = yes ]
    then
        cmd1; git init
        cmd2; git status
        cmd3; git add .
        ...
        cmd4; git commit -m $message
        cmd5; heroku create
        cmd6; git push heroku master 
        cmd7; heroku open
    success=`echo $?`
fi    
        if [success = 0]
    echo "You are all set"
    if [success > 0]
        then
            echo "heroku setup unsuccessful"

    fi
done