Intro & Demo
0:00
Imagine building your next startup with nothing more than a sentence. This is
0:06
Mine, an AI powered app builder that makes that possible. And in this course,
0:12
you're going to learn how to build it yourself. Let's try it out by entering a
0:17
simple prompt and hitting submit. What you're about to see next is something you'd normally expect from
0:24
high-end tools like Lovable, Replet, or Bolt. But in this tutorial, it is
0:30
something you will learn how to build. The result, a fully functional Netflix
0:35
style homepage generated entirely by AI. We can explore the full app right here
0:42
in the preview and everything just works. The layout, the interactions,
0:48
even models and favorites. It doesn't just look like a Netflix style homepage,
0:54
it behaves like one. And just above the preview, there's a live URL. You can
1:00
open it in a new tab, share it with others, or test the app in a real
1:05
browser environment. And when you're ready to see exactly how it works, simply switch to the code tab and
1:12
explore every component, utility, and file that was created. But how is this
1:17
even possible? And how does it all work? Let's break it down. What you're looking
1:22
at here is the inest developer server. It shows a background task that kicked
1:28
off as soon as we submitted our prompt. The task itself is handled by an AI
1:34
coding agent. The agent has access to various tools used to build the app. It
1:41
can run commands in the terminal, create, read, or even update files. And
1:46
its goal is to create a fully functional Nex.js JS application tailored to the
1:52
user's request. You can click into any step to see exactly what happened and
1:58
when. Which packages were installed, what commands were run, and which files
2:03
were created or modified. Finally, the agent spins up a real
2:09
development environment using an E2B sandbox, a secure container that runs
2:15
your app and exposes a live URL, so you can preview and interact with it just
2:21
like any deployed project. And finally, the finished app is saved
2:26
to our Postgress database powered by Neon. Let's head back to our Netflix project
2:34
for a second. And just above the message form, you will see that we have a message, two credits remaining. That's
2:41
right. Each generation uses a credit. So, let's see what else we can build
2:46
with this app and find out what happens when we spend our last point.
2:52
This time, I will go with something a bit more interactive, like a conbon
2:57
board I can drag around. And just like our previous project, this one was
3:03
created flawlessly. I can drag and drop cards and even create new ones.
3:08
Everything just works. And just like our previous project, I can visit the file
3:14
explorer and see every line of code that was generated. Notice how I've got one
3:21
more credit left. Let's go ahead and spend it. Right beneath our homepage, we can find
3:28
all of our previously generated apps or Mines as we are going to call them.
3:35
Let's click into the first one just to confirm it is still live and working.
3:41
But now, let's use our final credit to build something new. This time I'm going
3:48
to build an admin dashboard and I'm hoping to see some status cards and a
3:53
pageionated table. And here it is, a sleek looking admin dashboard with
4:00
status cards, sidebar, and a pageentated searchable data table. Notice how I have
4:08
no more credits left. meaning that when I try to generate a new prompt, I'm
4:14
going to get an error and it is time to upgrade. In order to get more credits,
4:19
it's time to upgrade. Billing is powered by Clerk. That's right. Just like their
4:26
out system, the developer experience is incredibly smooth. No web hooks, no
4:32
complicated code, no confusing Stripe setup. Everything works out of the box.
4:38
Watch how quickly I can upgrade my account. That's it. I have upgraded and
4:44
I am now on the premium plan and I can see my status reflected immediately in
4:49
the user settings. And as a developer, you can now track your monthly recurring revenue on the
4:56
clerk dashboard page. After a successful upgrade, you will see that you have a
5:01
100 credits remaining and beneath them the exact time they will reset. And by
5:07
the way, dark mode is fully supported in this project. You can switch it on from the project's settings bar, and it will
5:14
immediately update the entire app's UI, including the code explorer and the
5:20
landing page. This isn't just a coding tutorial. We'll
5:25
also be following a proper Git workflow throughout the project. This will include creating commits, new branches,
5:32
and real pull requests. Every pull request will be reviewed by Code Rabbit, our AI reviewer that
5:40
provides feedback on everything from logic issues to best practices.
5:46
All actionable insights and critical mistakes will be flagged automatically, drastically improving our code quality.
5:54
Let's quickly go over the text stack we'll be using. Next.js 15 with React 19
6:01
make our framework with support for serverside rendering and server components. TRPC combined with fanstack
6:09
query will ensure our app meets full stack type safety. Prisma OM with
6:15
postgress provided by Neon will be our database solution. Tailwind version 4
6:21
for styling along with chats and UI for accessible and reusable components.
6:27
Authentication and billing will be done by clerk while background jobs and agent
6:33
tooling and agent networks will be done by ingest. E2B for executing AI
6:40
generated code in secure cloud sandboxes. Docker for generating custom
6:45
sandbox templates. Open AAI anthropic or Grock depending on the model you choose
6:52
to power your AI agents. Code Rabbit for AI powered code reviews. And of course,
6:59
we'll deploy everything to production when it's finished. And now, without further ado, let's get started.
01 Setup
7:07
In this chapter, we're going to set up our Nex.js project, confirm our environment, get familiar with the file
7:14
structure and versions of our project, and set up our component library. And
7:19
finally, create a GitHub repository for this project. So let's start by setting
7:25
up our Next.js project. If you head to the documentation page of Nex.js and
7:31
click on the installation tab, you will find the system requirements. The minimum Node.js version is 18.18
7:39
and these are the supported operating systems. So first things first, let's confirm we have a proper node version
7:46
installed. You can go inside of your terminal and you can run node-v.
7:51
And while you're here, also confirm these two commands. You should not be getting errors for any of these three.
7:59
If you get errors for any of them, it is time to upgrade or reinstall your node.
8:04
You can do that by visiting the official Node.js website. If you have a version
8:10
which is lower than 18.18, you're going to have to upgrade as well. Keep in mind
8:15
that if you are or Linux or some different operating system, your versions of npm and npx may be
8:22
different, but as long as you're not getting any errors and you have a correct node version, you are good to
8:28
go. So now let's go ahead and let's actually install our Nex.js application.
8:36
Seeing here, we have an automatic installation CLI command. So I'm going to go ahead and copy it, but I'm not
8:42
going to run it immediately. I will slightly modify it. Instead of using at
8:47
latest, I'm going to write the exact version 15.3.4.
8:53
So instead of latest, I'm going to do 1534. Why am I doing this? And do you need to
9:00
do this? The reason I'm doing this is because I don't know when my viewers will come across this video. This might
9:06
be a month from now, 6 months from now, or a year from now. And depending on that, there might be a lot of new
9:13
breaking changes introduced in the latest versions. So if you want to, you
9:19
can use the latest version. That's perfectly fine. But if you want to avoid any breaking changes, meaning that
9:25
you're watching this video far into the future, like 6 months from now or a year from now, and you just want to code
9:31
along, I'm giving you the option to use the exact version that I had at the
9:36
time. Right? So this is the latest version at the time of me making this tutorial. So I'm going to go ahead and
9:43
use this version. I'm going to create a project called a Mine. I'm going to
9:48
select yes for TypeScript, yes for slint, yes for Tailwind, and I'm also
9:54
going to select yes for the source directory. Be careful here because I think that the default value might be
10:00
no. So use the arrow keys to select yes and press enter. Same thing for the app
10:06
router. Make sure you select yes here. Yes for Turboac, but only for nextdev in
10:12
my case. And I'm not going to customize the import alias. So this will be the
10:17
only no option for me. And now let's just wait for our dependencies to install.
10:24
After our dependencies have installed, you're going to see a success message like this. What you have to do next is
10:30
you have to enter this directory with your terminal. So let's go ahead and do change directory Mine like this. And
10:38
once you're inside of here, you can run the ls command to see a list of files inside. Before we run this project, I
10:45
want to set up our IDE, the place where we are going to write some code. For me,
10:50
that's going to be VS Code. So I'm going to go ahead and select open, and I will select my new Mine project.
10:59
Inside of here, you should be seeing a similar or the exact same file and
11:04
folder structure. So, first let's confirm our versions. I'm going to go inside of package JSON. You can see that
11:11
I have Turboac here because I selected TurboAC. Yes, you can see that I have React 19. You can see that I have next
11:19
15.3.4. You can see that I use Tailwind version 4 and TypeScript version 5. And these
11:26
are probably the most important versions for this project. Of course, if you are watching this into the future and you
11:33
want to use whatever are the newest versions for you, you absolutely can. You don't have to worry about this. Then
11:39
I'm simply showing this for those people who want to use the exact same versions as me. Great. So about the config files,
11:47
I have a tsconfig, a post CSS config, next config, and an esllet config. You
11:53
might notice that Tailwind config is missing. That is because we are using Tailwind version 4, which no longer
12:00
introduces a Tailwind config. Inside of the source folder, I have an
12:06
app folder. Source folder is quite important. Make sure you have it. So, inside of the app folder here, I have a
12:13
favicon, globals, layout, and page. You can quickly visit them if you want
12:20
to. And inside of my public folder, you can see that I have some SVGs here.
12:27
Great. So now let's go ahead and let's install Shats CNN UI into our project.
12:34
First of all, let's mark these as completed. Now let's go ahead and set up Shatsen
12:41
UI. So by visiting chats UI and going into the introduction you can see that even
12:47
though we are going to use it as our component library is actually not a component library.
12:54
Instead it is how you build a component library. It is basically a collection of
12:59
open code components with composition pattern that you can simply add to your
13:05
project. So let's go ahead and go inside of the installation and select next.js.
13:10
Let's pick our package manager here. Let's copy the command. Make sure you
13:16
are doing this inside of your project. So again, you can run ls to confirm you are inside. And once again, instead of
13:23
using latest, I'm going to go ahead and show you which version I have. So for me, that is 2.7.0.
13:31
So let's go ahead and run the command.
13:37
My apologies. instead of latest 2.7.0
13:44
in it. If you get prompted to install, you can select yes. I'm going to be using neutral for my color here.
13:51
And there we go. Just like that, we have initialized chats UI into our project. Here you can see how it verified the
13:58
framework next.js and it valid validated the Tailwind config. It found version 4.
14:05
Perfect. You can see that it also installed some dependencies, modified our global CSS and created one file. So
14:12
we can now go ahead and visit all of those things here. You can see that I now have CLSX
14:19
Lucid React and I believe also Tailwind Animate CSS.
14:25
I think that's the new package that came from uh Shotsy UI and Tailwind merge is
14:32
new as well I believe. Great. So those are the packages that SHAT CN CLI added.
14:39
Now let's go ahead and look at our lib file utils inside of the source folder.
14:44
In here we have a CN function which we're going to use throughout our project whenever we need to safely uh
14:50
merge or add dynamic Tailwind classes. And it also modified the globals.css
14:58
by adding a bunch of variables which we can now use uh to build our project
15:03
theme. It also added dark mode rules as well. Perfect.
15:10
So now let's go ahead and let's learn how to add a component. So for example,
15:15
let's go inside of our components here. Let's select a button component and
15:21
let's go ahead and select CLI option for the installation. And let's go ahead and copy this to clipboard. And I'm going to
15:28
use 2.7.0 add button. And just like that, we have added a
15:35
component to our project. If you get prompted with the option to use legacy
15:40
peer depths or force, uh you can select any of those two options. But if you're
15:46
using the same versions as me, I'm pretty sure uh it will you will have the exact same experience. It should just
15:52
work straight out of the box. But if you get any errors or any uh decisions to
15:58
make, you can select legacy peer depths. If you don't have that choice, perfectly fine. You can just continue.
16:05
Great. So now you can go inside of source components UI and you can find button.tsx
16:10
and you can see that it's using some of these new packages that it added before and it also uses the CN which it
16:18
initialized before. So the cool thing about SAT CNUI components is that they are open code meaning that it's not
16:25
bundled in a Node.js package. it is actually available for us to modify and
16:30
build as much as we want. So now let's go ahead and let's run our project.
16:37
So npm rundev you will see d- turbo pack here and then you can open the localhost
16:43
3000 to see your app. Now let's go ahead and let's modify
16:49
source app page tsx so we can see some changes here.
16:55
go inside of page here and let's learn how to actually write a page component.
17:00
So I'm going to remove everything and the important thing here is that your components need to be uh using default
17:08
export. Right? So the name doesn't matter. This can be called home or it
17:13
can be called page. I like to use the page convention. And now in here I can just write hello world.
17:20
And once I save you will see the change hello world. If this is your first time using Visual Studio Code, if you have a
17:28
little uh circle here, it means the file is unsaved. So, just hit save and then
17:35
it will be updated. And here's what happens if you don't do
17:40
a default export. It will not be able to find the page. So, that's why default
17:45
expert is important here. But the name itself does not matter. But of course,
17:51
you can't use some reserved uh things, right? You should not be able to call this error, right? Because error is
17:58
already reserved. Great. So now let's go ahead and let's test out our tailwind. So I'm going to
18:05
go ahead and add a class name here. Text bold.
18:11
My apologies. It is font bold. I forgot. There we go. And now my font is bold.
18:17
But let's try changing the color. Text rows 500. And now I've changed the color. You
18:23
might notice that I have this little color icon. And when I hover over my classes, I can see the inner CSS it is
18:31
applying. If you want to see the exact same thing, you can go ahead and install Tailwind
18:37
CSS IntelliSense package. It will be quite useful in this tutorial.
18:42
Great. Now, let's go ahead and let's remove this and let's add a button from components
18:49
UI button. Let's go ahead and give it some children. And let's close it.
18:57
And just like that, you have a button here. And now I'm going to show you a quick
19:03
way you can enter the button inner code. You can use command or control and then
19:08
click here and that will take you to the actual source components UI button.
19:16
Right? So it will be quite useful for you to learn this shortcut because I will use it quite often in the tutorial
19:23
so you don't get confused how I got there that fast. Another shortcut you should learn is command space. My
19:30
apologies command P or control P depending if you are on Windows. And
19:36
then once you open this bar you can search for button and press like this.
19:41
I'm going to be using this quite extensively in the tutorial. So it would be good that you learn this as well. So
19:47
once you're inside of the button here, you can see that we can have some variants like destructive. Let's go
19:53
ahead and try it out.
19:59
Once you add it, you can see that the destructive variant is now uh active.
20:04
But what happens if you go inside of the code and change this to danger? You can see how it immediately breaks.
20:12
And we have to change this to danger. So what we've just done is we've changed the inner code of the button to our
20:19
liking. Instead of destructive, it is now called danger. So let's bring that
20:24
back now and let's try creating a new one. So new and let's go ahead and try
20:30
something fun like background purple 500 text white.
20:36
And if you go ahead and try now, you will see that you have the new option. And just like that, you created your own
20:42
variant. So that's the power of Shatsen UI. And now that we confirm the button
20:49
is working, let's go ahead and let's add all of the other components. The reason I want to add all other components is so
20:55
that it's easier to follow along in this tutorial. You obviously don't need all of them and you can clean them up later,
21:03
but it's just going to be easier for us to have all of them at our disposal and then simply choose which ones we want to
21:09
use instead of having to install and wait. So, I'm going to go ahead and shut down my app and I'm going to run npxhat
21:16
cnui 2.7.0-all. And this will add every single component
21:22
to our project. And you can see how it added all of
21:27
these components, but it skipped the button because it already exists. Perfect.
21:33
So, now we can go ahead and inside of your source components UI, you will see all of these various components here.
21:40
You now probably have a lot of unsaved files here. My apologies, not unsaved,
21:45
uncommitted files. Uh, we're going to explore what that means in a second. So,
21:51
let's go ahead now and let's do the last thing that we need, which is create a GitHub repository. So, I'm going to go
21:58
ahead and go inside of my GitHub. And I selected new repository here. Now, just a quick note, you don't have to do this.
22:06
So yes, following this step right here, creating a GitHub repository, branching
22:12
out, doing commits, and opening pull requests, it's completely optional. It
22:17
is simply for those who want to learn uh how to follow a proper Git workflow. If
22:23
that is not something of interest to you, you don't have to do it at all.
22:28
Right? So I'm going to create a new repository called Mine, and I'm going to set it to private. And I'm going to
22:34
create a new repository here. And then I'm going to go ahead and copy uh these
22:40
three lines because we need to push an existing repository here. But before we
22:46
can do that, we have to stage our changes. So we have 53 unstaged changes now. So let's go ahead and add a plus
22:53
here. And now all of them are staged. And now let's add a commit message. So
22:58
I'm going to go ahead and do 01 setup. basically my commit messages will match
23:04
uh my chapter and then I'm just going to commit. And then what we're going to do
23:09
is we're going to go ahead inside of our project and we're going to run those three commands here.
23:15
Wait a second. And now if you go ahead and refresh your repository, you can see
23:20
that you have your project available right here. And now in here you no longer have that button publish a branch
23:27
because now you have access to your uh remote origin main meaning that this is
23:34
no longer a local repository. This is now a remote branch on a remote repository. Perfect. So that marks the
23:42
end of this chapter and now we are ready to start setting up our database. Amazing job and see you in the next
23:49
chapter. In this chapter, we're going to set up
02 Database
23:55
our database. We're going to start by obtaining a connection URL using a poser
24:01
database provided by Neon. We are then going to set up Prisma, our OM. We're
24:07
going to learn how to add and modify a Prisma schema, some basic migrations, as
24:12
well as how to use a database studio, and also how to reset your database in case something goes wrong. And then
24:20
we're going to go ahead and branch out, open up a pull request, and review and
24:25
merge that pull request. So, let's go ahead and visit Neon database. You can
24:31
use the link in the description or the link you can see on the screen to let them know you came from this video. Once
24:37
you've created an account with Neon, go ahead and click create project. I'm going to go ahead and call my project
24:44
Mine, and my database name will be Mine as well. And then I'm going to click the
24:49
connect button and I'm going to copy the snippet for my connection string. After that, I'm going to go inside of my
24:56
project and I will create a new file environment. Inside of here, I'm going to create a
25:02
database URL and I'm going to paste my connection string.
25:08
After that, let's go ahead and let's set up Prisma. You can use the link in the
25:14
description or the link you can see on the screen to let them know you came from this video. This helps me a lot in
25:19
creating more content like this. So let's go ahead and learn how to use Prisma with Nex.js. The first step is to
25:27
set up the project. Since we already have that, we don't have to do that.
25:32
Instead, we can go immediately to step two, install and configure Prisma. Since
25:38
we are using other databases, specifically Neon, let's click here so
25:43
we know what to install. So, let's go ahead and start by installing Prisma and TSX as our dev dependencies.
25:54
Once this was installed, I will just go ahead and go inside of my package. JSON
26:01
so you can see the versions, right? Prisma is 6.10.1 and TSX is 4.2. 20.3.
26:09
So if you're using the latest versions, this probably does not matter for you. But if you want to use the same versions
26:16
as me, you would go ahead and set up your installation like this. For
26:21
example, if you want to. Great. So after we've done this, our next step is to install
26:30
Prisma client, but this time not as a dev dependency, but as an actual
26:36
dependency instead. After we've done this,
26:41
let me show you the version. Prisma client 6.10.1. So I think the
26:48
most important thing about the Prisma versions is that Prisma client needs to match your Prisma dev dependency. At
26:56
least at the time of me making this video, I'm pretty sure that is an important rule. It might change in this
27:02
in the future. So I'm not sure, but I think it was this way for a long time now. So now let's go ahead and let's
27:09
actually run our app. So in here they have this snippet but I'm not sure if
27:14
this exact output will work with our directory because we have a source file
27:20
here. So instead what I'm going to do is I'm just going to run npx prisma init with nothing more. So npx prisma init.
27:29
Let's go ahead and run this. And after this was finished I see this
27:36
big log here. So your Prisma schema was created in Prisma/sema.prisma.
27:45
Prisma would have added database URL but it already exists in your environment.
27:52
You already have a g ignore file. Don't forget to add environment in here. So pretty good warnings here. So yes, every
27:58
time you run npx prisma in it, it creates an environment file or it modifies it and it adds a database URL.
28:07
But this time it detected that we already have a database URL inside of
28:12
our environment. So it didn't do anything. Right? Usually it would modify
28:18
your uh uh environment file and it would write a big message at the top saying
28:25
modified or generated by Prisma. But the only thing you need in your environment is the database URL. So even if yours
28:32
looks different, maybe in the future they've changed this. All you need is a database URL for now. Great. So now
28:40
let's go ahead and let's visit the other things added inside of Prisma folder. We
28:45
now have a schema.prisma. And what's important here is that your provider is
28:50
posgress and that your URL is the database URL. So make sure you don't
28:56
have any typos here. But if you got this warning message, it means you have typed
29:01
it correctly because it did not override it. And yes, about this second message,
29:07
uh don't forget to add environment in the git ignore file. That is very important. But as you can see, my
29:13
environment file is grayed out, which actually means it is inside of git ignore. You can find it right here.
29:22
Great. So now that we have that set up, let's go ahead and learn how to modify
29:28
the schema. So I'm going to go ahead and I'm going to copy this exact changes that they are using in their Prisma. If
29:35
you don't have access to that documentation page for whatever reason, don't worry. I'm just doing this as an
29:40
example. Our schema will be different anyway, or you can just pause the screen and type it out now. So basically we're
29:46
adding a user model with an ID of type integer and it will auto increment.
29:52
Basically if I add one user it will be ID1 and then I add another user it will
29:57
be ID2. Then an email string which is required and unique and a name string
30:04
which is optional. So basically, Prisma is using decorators
30:10
for stuff like defining a primary key or ID in this case or adding the default
30:16
value or setting something to be unique. And if you want to make a field optional, you simply add a question mark
30:23
after its type. And if you want to make a relation like user and post, you start
30:29
by defining well obviously your database structure one to many many to many,
30:34
right? uh and then you simply add how you want it to be architectured. So I
30:39
want user to have many posts but I want post to have only one user. So you
30:44
define the second model and you literally say it's an array of that
30:50
model, right? And then inside of here in order to properly connect it using foreign keys, what you have to do is you
30:57
have to set the author ID or the user ID and then you have to create an actual
31:03
relation using the foreign key. So you have to use user as the model and then
31:09
you use a decorator relation. So it matches the outer id and it references
31:14
the ID of the user model and this is the place where you would add things like on
31:20
delete cascade right so in case the user gets deleted we want the model post to
31:27
get deleted as well so you can remove this for now just leave it exactly like this this is like a pretty good minimal
31:33
example to learn Prisma and one thing I forgot to tell you yes you can install
31:39
Prisma uh here to see the syntax. I should have told you this before. My
31:45
apologies. I just remembered. Uh, so make sure to install this, right? So you can see the pretty colors and
31:50
everything. And once you've done this, make sure you save this file. And let's go ahead and see how do we actually, you know, commit
31:58
this, right? Because right now, uh, our database here is completely empty.
32:03
Nothing yet exists here. Nothing is pushed here. So let's go ahead and let's do npx prisma migrate dev. I'm not going
32:11
to do this flag because that's not how we're going to uh run our commands. So, npx prisma migrate dev. And now we're
32:19
going to be asked to uh call this migration in a certain way.
32:27
So, I'm going to call this migration in it. And just like that, we applied the
32:32
migration. And two things have happened now. Actually, three things. The first
32:38
thing is that it synchronized our database from neon to the schema. Right?
32:43
So now uh our neon database has the same schema there. Uh the second thing it did
32:49
is it created a migrations file instead of our project. And the third thing it did is it generated the Prisma client
32:56
instead of source generated Prisma. Right? So let's try and check all of those things out. Uh if you go inside of
33:02
your Prisma, you can now see the migrations here. And inside of here you can see the actual SQL file that
33:08
happened. Uh and the second thing you can see is
33:14
I'm not sure where is my uh generated. It's right here. Source generated. There
33:20
we go. You can see the Prisma is now available here. And the third thing that it did is it synchronized the Neon
33:26
database. So if you go inside of neon uh and if you go inside of tables I think
33:32
you might be able to see there we go post and user right. So you can see uh
33:38
the exact fields here title content published author ID and user relation ID
33:45
email name and posts relation. There we go. So we officially synchronized all of
33:50
those things now. So let's go ahead and see the next steps that we have to do.
33:56
Uh in here it suggest creating a seed script. Let's go ahead and do that.
34:01
Right, I'm going to copy this. You don't have to do this, but I think it's nice.
34:06
It's a nice way to learn Prisma. Let's go inside of Prisma and let's create a seed.ts
34:12
script like this. And let's paste it inside. Now in here I have to go inside
34:18
of source I think. Let me just see how do I access this.
34:28
All right, found it. So it's source generated Prisma, right? We have to go
34:33
inside of source generated Prisma. It's not inside of app like they suggested
34:40
here. Perhaps uh this depends on whether you use the source folder or not or
34:45
they've changed it. So they use the prisma dot user create input. Now if
34:50
you're wondering where does this come from? How does it know user create input? Why is this called user? Well,
34:58
that's actually the magic of Prisma. Every time that you modify the Prisma
35:03
schema and you run the proper command npx prisma migrate dev which internally
35:09
runs npx prisma generate. What basically happens is that it
35:14
refreshes its internal uh intellisense typescript tool if I can call it like
35:20
that and it creates a bunch of these useful types for you. So right now you
35:25
also have things like Prisma uh you can see all these weird things. If I I think
35:32
I can you I can import user and I can import post right and if I were to add a
35:37
new model I would be able to import that as well. Right? So that's the cool thing about Prisma. Uh perfect. So I have this
35:44
user data here and let me just if you if you are not unable to copy this let me
35:50
just show you this first example and all the other ones are exactly like that and
35:55
this is the bottom part right uh or you can use the link that I will put on the screen uh for this seed
36:02
script if you want if you are unable to find it great so now let's go ahead and
36:09
let's add this to our package JSON so Prisma and seed
36:14
Let's go inside of package. JSON. So after scripts here, let's add Prisma
36:22
seed. TSX Prisma SLT seed.ts. Just ensure that yours is in the correct
36:29
place. And once you've done that and saved the
36:34
file, uh in here we have a warning. Before starting the development server, note that if you're using Nex.js JS
36:41
version 15.2.0 or 15.2.1 do not use Turboac. Right? So you can
36:47
see that Turbopac sometimes has this small little issues. But since we are on a newer version, we should have no
36:54
problems here. Right? Uh and now let's go ahead and run npx Prisma database
37:00
seed here like that. And that uses the tsx Prisma
37:06
seed. And there we go. The seed command has been executed. So, just make sure you have tsx installed in your dev
37:12
dependencies and your seed command set at the correct place. And you should immediately be able to see this if you
37:18
go inside of your neon database. And if you go inside of your users, you will see Alice and Bob inside of the users
37:25
here. So, we successfully populated our database. Perfect. Another way of seeing this data is by using the Prisma Studio.
37:33
So, NTX Prisma Studio should open it up on 555.
37:39
And there we go. You can see that inside of here, I have some posts and I have some users
37:47
right here, Alice and Bob. Perfect. Let's see what are the next steps here.
37:53
So, now we have to learn how to actually uh fetch our data, right? So, let's go
38:00
ahead and do that. I'm going to go ahead inside of my project inside of source
38:06
inside of lib and I'm going to create a database.ts file. So they recommend
38:11
creating Prisma. I like to call it database. And I'm going to import Prisma
38:17
client from generated Prisma. This is the same thing that they are doing. I'm just using an alias here. And then you
38:24
literally have to do the same thing here. I'm going to go ahead and try and
38:30
explain uh how this works. So basically
38:35
why not just export new Prisma client. The reason why is because of Nex.js hot
38:41
reload. Uh every time a hot reload happens a new Prisma client gets initialized and that causes problems and
38:48
you would actually see a warning in your terminal about that. So what they do is they store Prisma in a global because
38:56
global as the window object is not affected uh by hot reload.
39:04
I used window object. I'm not sure if this belongs to the window nameace. Perhaps node namespace would be a better
39:12
descriptor of it. And I also don't like to use the export default. So I will just use the export const here. And let
39:19
me just put it here. Actually, I have to do it like this. Okay.
39:26
So, now that we've done that, let's go ahead and let's uh try and query
39:31
something. So, I'm going to go inside of my source folder inside of app page.x
39:38
and I'm going to go ahead and import prisma from lib database right here. And
39:46
I will get my users from await which means I have to turn this into an asynchronous component prisma dot user
39:56
and let's just use find many and then I'm going to remove this entirely and do
40:02
JSON stringify users null and two and we can remove the button import. So this is
40:09
a server component by default meaning that it is rendered on the server and it
40:15
has access to the database. Server component is not the same thing as server side rendering. Those are two
40:22
different concepts. A server component is actually a react thing not a next.js
40:28
thing. Next.js is simply the environment where server components can be demonstrated. So let's go ahead now and
40:35
do npm rundev. Let's visit localhost 3000. And in here
40:42
you should see a JSON of your users inside. And if you change this to post
40:48
and change this to posts, you should be able to see posts here as well. So that
40:56
is basically it. Right in here they go a bit more in depth. They're creating a whole, you know, unique include. We're
41:04
going to learn that through the project itself. So that's basically it for this. But there is one more thing I want to uh
41:11
go over here. So we added the schema, we learned about basic migrations and we learned about database studio. But we
41:18
didn't learn about database reset. So why do we even need to learn about
41:24
database reset? Well, I just think it's very useful for development. So let me
41:29
go ahead and actually modify this. So for development, right, not for
41:35
production cases, right? You would pretty much never need to reset your database in production, but during
41:41
development, it's just super easy if you get stuck, right? Because this is the case now. So we now have some posts and
41:48
we have some users, right? So what happens if I go ahead now inside of my
41:54
schema Prisma here and for example, I remove the title from the post. It's no
42:00
longer required. or I remove the email, right? And if I go ahead and do that now. So, npx prisma migrate dev. I'm
42:08
going to add this changes now. Uh it will probably ask me to reset database
42:13
anyway, right? Uh that's why this is a dev command, right? It should this
42:19
should also not be used in production. You would usually do npx prisma migrate.
42:24
You can learn more about that uh in the actual Prisma documentation here. And there we go. So now we have a problem.
42:31
You are about to drop the column title which still contains nonnull values and
42:37
you're about to drop the column emails. Are you sure you want to create and apply this migration? I'm going to
42:43
select yes and I'm going to call this test migration here. Uh and this time it
42:48
worked right. So this seems to be uh normal now. But the problem is what if
42:54
you do something more complicated? For example, let's try and let's drop the user here and let's drop this. Right?
43:02
I'm trying to make a scenario uh where this actually stops working. Right?
43:10
Let me try this. I'm going to do another migration and
43:16
I'm going to call this test again.
43:22
Test two. And okay, it's still working. Never mind. Basically, my point is that
43:29
you need to learn how to nuke your database. Let's say that you do some some of your own experiments here and
43:36
you get to a point where you're getting errors with your npx Prisma migration. What I usually do if I get completely
43:43
stuck and I'm in development, this is important only for development mode. I
43:49
would go inside of Prisma here and I will remove all of my migrations, all of them. And then I would do npx prisma
43:57
migrate reset like this. Are you sure you want to reset your
44:03
database? All data will be lost. And I will press yes. Right. So, uh, oh yes,
44:11
um, I forgot that resetting it also runs the seed script. So, let's remove the seed script because it doesn't make
44:17
sense, right? We just use it to learn. So, we can remove that. We can go inside of our package JSON and we can remove
44:23
this. And we can also go inside of our source app page and we can remove this as well.
44:37
And then let's go ahead and just confirm that we can do npx prisma migrate reset
44:42
again. So just confirm and this should clear
44:48
your entire database. Basically this is quite useful in
44:54
development mode when you are for example doing what we just did right we just learned how to use Prisma. So we
45:00
populated our database with some models. We don't really need we don't need the user with name optional and email
45:09
required and posts right there. There's not going to be any posts in our project. So we just learned how to reset
45:15
our database as well. Perfect. So now it's time to create our first pull
45:21
request. Once again uh the part of git workflow
45:26
of this tutorial is completely optional only for those who want to learn. So you can end the chapter here uh if you don't
45:33
want to follow the git workflow. So what I'm going to do is I'm going to go ahead down here where it says main and I'm
45:40
going to click create new branch and I'm going to call this 02 and then I'm going
45:46
to call it database. So I'm going to call my branches according to my chapter 02 database. And you can see that down
45:53
here it says 02 database. Then I'm going to go ahead and click the plus icon to
45:58
add all of these changes. And then I'm going to go ahead and add my 02 database commit message. And after that, I'm
46:05
going to publish my branch. And once I've done that, I'm going to go back to my GitHub here. And immediately
46:13
you will see an option to create a pull request in my repository. If this did not appear for you, you can manually go
46:20
inside of pull requests, new pull request. The base will be main or master
46:26
depending on what you're using. And you're going to select your new branch here in the compare. And then create a
46:32
pull request and then click create pull request right here.
46:40
And once you've created your pull request, you can go inside of file changes here. And in here you can see
46:45
every single thing that was modified. You can see that we added the Prisma client instead of our lib database. We
46:53
slightly modified our page tsx and we added the schema prisma. We installed
46:59
some new packages and we also added uh source generated prisma to get ignore.
47:05
So that was not added. And after that we can go ahead and merge this pull request and click confirm merge. Uh I'm not
47:13
going to delete my branch simply so I have access to all of my branches here. You can see that I can now always go
47:18
back to that state of the application. And then what you have to do inside of your project is the following. Go uh
47:26
down here and click on the 02 database branch and then you have to select your
47:32
main branch. You might be wondering which one this main or this main. Well,
47:38
basically the difference is one is a local branch and the other one is a remote branch. So the remote branch
47:44
would be the one that is most uh well I I would say that is the source of truth.
47:51
I could be wrong in doing this because you could have some changes on your main branches that you didn't push. But in
47:58
our case we're going to push everything from the main branch. So in your case it doesn't matter if you click on this one
48:04
or if you click on this one you will have the exact same result. What's important is that you do the following.
48:11
uh you click on synchronize changes here and then okay
48:16
like this. And now you should no longer have any uh visible buttons here, right?
48:22
And if you go inside of your graph, you should see this an initial commit then 01 and then something different for 02,
48:30
right? Because we branched out and then we merged that back into our main like
48:36
that. And now if you go ahead inside of your main here, you can see that six minutes ago we merged this, right? Uh,
48:45
perfect. So that's it for this chapter, you can now see that even though I'm in my main branch, I still have my Prisma
48:52
schema, meaning everything is fine. Everything is good. Perfect. So let's go
48:57
ahead and wrap this up. So I'm going to go ahead and uh
49:03
check this as done. Amazing job. and see you in the next chapter.
03 tRPC Setup
49:09
In this chapter, we're going to set up TRPC, which is going to be our data access layer. Let's go ahead and let's
49:17
head to the TRPC documentation page. You can use the link in the description or the link you can see on the screen to
49:23
let them know you came from this video. Once you are on the landing page, go
49:28
ahead and click on the docs. And in here, click on the client usage. And in
49:34
here you can find tanstack react query with a little star icon. And in here
49:40
going to server components. Be mindful that at the top here you do have a
49:45
nex.js tab but that is talking about an older nex.js version. So make sure that
49:53
you are inside of tanstack react query server components. This is what we need.
49:59
The first thing we have to do is install all the necessary dependencies. So, if you're watching this video far into the
50:06
future, I would recommend waiting until you see the exact versions that I had installed. So, before you run this, what
50:13
I suggest you do, and what I suggest you do before you start any of my chapters,
50:18
is click on this button right here and just click okay. Basically, this is just
50:24
a sanity check to confirm that you are on your main branch and that you didn't accidentally uh forget to synchronize
50:32
your merged branch from the previous chapter. So, you only care about this if you are actually following the git
50:38
workflow. Once you've done that and you are confirmed to be on the main branch, you
50:44
can go ahead and install all of these packages. I am going to show you which versions exactly I have installed.
50:52
Let's head into package.json so we can see all the changes here.
50:58
As you can see, I have tenstack react query 5.80.10 and all tRPC versions are 11.4.2.
51:08
So if that's something you care about, you can go ahead and install these
51:13
versions as follows. You would add this exact number to all of these packages
51:20
regarding TRPC and then you would change this from using the latest version to using
51:27
5.80.10 and the ones for ZOD client only and
51:35
server only are not that important but I'm going to show you them as well. So server only is 0.0.1 0.1 and zod is a
51:43
package we already have installed and we had it installed in the first chapter setup because when we added all chats
51:50
component we also added forms and forms in chaten use zod for validation so
51:57
that's why this isn't marked as a new dependency because we already had it great so now that you have confirmed to
52:04
installed all TRPC ones just double check that you actually have the same versions of all TRP PC packages because
52:12
that is quite important, right? So the version here is the the important
52:17
version here is 11.x, right? The minor versions probably don't matter that
52:22
much, but there is a big breaking change in uh 11 if you're coming from 10 or 9.
52:28
So make sure you're using at minimum 11 something and then you're good to go.
52:34
Perfect. Now let's go ahead and let's create a small init file here. Uh so I'm
52:40
going to copy this. Uh it's a very simple snippet. So even if you don't have access to this documentation page,
52:47
don't worry. I will pause the screen and you will be able to copy with me. Let's create a TRPC folder inside of our
52:53
source folder. And inside let's create init.ts. And in here we are importing init TRPC
53:00
from TRPC server package and cache from React. We are setting up the create
53:06
TRRPC context here with some mock information and we are also creating our
53:11
initial T object which is basically initializing the TRPC and then we are
53:16
extending it to create the router callers uh and factory and base procedure.
53:23
Perfect. So that's our init file. Now let's go ahead and scroll a bit down
53:28
and let's create our base routers. So I'm going to go ahead inside of TRPC
53:34
I'm going to create routers folder and inside app.ts.
53:41
So I'm importing Z from zod and from the previously created init file I'm
53:46
importing the TRPC router with the base procedure. So in here we have a very simple procedure called hello and it
53:53
accepts text which is a string and it returns back an object with a property
53:59
greeting which is a string with the information from the text that we've entered. We are going to test this out
54:06
later so it's easier for you to understand if this is the first time seeing the TRPC syntax.
54:12
So that's it for the routers and now what we have to do is we have to create
54:17
our API folder DRPC and then a special uh Nex.js variable folder uh and then
54:24
route.ts. So let's do that first. Inside of source app folder, let's
54:30
create API. Then let's create tRPC. And then let's create a dynamic folder inside of square
54:37
brackets TRPC again. and then route. DS
54:43
and let's go ahead and copy this. Now, in here, we're going to get some errors. It's specifically uh about this import
54:50
alias. So, we don't use uh this curly little string. Instead, we use an add
54:56
sign. So, you can just switch it to that and you will have no more errors. As you can see, uh all of these things already
55:02
exist. So, we have the TRPC server package. They are just extending it here. Some tree shaking it seems. And
55:09
the TRPC in it is the one we just created as well as the router's app. Right? So you can commandclick on this
55:15
to visit that same as the init one. And this is a NodeJS package. So that's a different thing. Great. You can save
55:22
this as well. Just double check that you have app folder API TRPC TRPC in square
55:29
brackets and then route.ts. It's very important to have this exact structure.
55:37
Great. Once we've done that, let's go ahead and let's create the queryclient.ts.
55:44
So I'm going to go inside of source drpc queryclient.ts.
55:53
Yes, it is.ts. Perfect. So about super JSON, we can um let's do this. Let's
56:00
immediately install it. So super JSON because we are going to need it. And I will go inside of my package JSON here.
56:07
So this is my version in case you want to use the exact same one. And what
56:12
we're going to do is we're going to immediately enable serialized data using superjson.s serialize and des serialize
56:19
data using superjson. DS serialize as well. So you can leave it the component
56:25
like this. No need to modify anything further. Now let's go ahead and let's create our
56:32
client.tsx. So this will basically be a wrapper, a provider of TRPC and Tstack query which
56:40
we're going to wrap our entire app around. Uh if this is your first time ever seeing Tanstack query or TRPC, this
56:47
is a lot of information at once. Uh but if you've ever worked with uh React
56:53
Query or something like SVR, I promise it's a similar API. It is just uh a bit
57:00
more advanced data access layer format that we are doing here. So as much as
57:06
this setup seems a little bit complicated, it is definitely worth it. You will see how easy it will be to
57:12
build your API routes and your procedures later on. You will thank yourself for going through this because
57:19
of how easy it will be to maintain this project going forward. Right? So just
57:24
stay with me. I promise it will be worth it. So let's create client.tsx
57:29
inside of here. client.tsx. So this extension is important because
57:35
this will be exporting a component. So since this is a bit of a larger file, I'm going to go ahead and explain what
57:41
it is. So first of all, we are adding use client because this has to be a client component. You can see it tries
57:46
to access the window here and it's also using some uh hooks like use state that
57:53
can only be achieved using a client component. That's why we are using use client at the top and you can also see
57:59
the explanation here. So we are importing all of those things. We should not have any errors because we either
58:05
created or installed these packages. So one thing that we are going to change
58:11
is this. So I don't like how this is specifically tailored for Versell because I don't know where you want this
58:17
deployed. So don't worry. I'm going to show you how you can modify this so it works well regardless of where you
58:24
deploy. So let's go inside of our let's just save the file uh
58:32
and let's go inside of environment here and let's simply add next public app URL
58:40
and this will be the following. When you go ahead and do npm rundev you're going
58:46
to see where your app is being run. So go ahead and copy this and simply paste
58:51
it inside. Then I always like to copy from here and then paste it rather than type it out
58:58
because you can do some typos if you're not careful. And you can see how complicated this is, right? So it
59:04
recognizes Versell URL and then it has to append the protocol and then it has to add this because Versel URL doesn't
59:10
have the protocol otherwise it has to guess that we are using the 3000 port. It's just completely unnecessary. We can
59:17
do this much easier. you can return this completely and instead of using this you
59:22
can just do process environment next public app URL. So then when you deploy,
59:28
you will simply change this to your production URL regardless of where you deploy and this will work just fine. And
59:34
in my opinion, it's much simpler to work with. And this is important, right? You can see that this will attempt to load
59:41
the URL from localhost 3000 /trpc.
59:48
So it's important that you didn't do any changes herec.
59:54
That's why this structure is important. And then in here we just have some regular uh trpc and uh tanstack query
1:00:02
setup. But we have to enable the transformer superjson because we did enable it here. So we have to enable it
1:00:10
here as well. So let's do the following at the top here. I'm going to import superjson from super JSON and I'm going
1:00:18
to go down here remove this part and simply uncomment. So we are using the
1:00:23
super JSON and you can ignore the error for now. It's because we need to enable it in some other places as well to get
1:00:29
it to work. So once you've done this, we didn't do any changes besides
1:00:35
this and this. Right? That's the only thing we changed. So now as per their
1:00:42
instructions, we have to go ahead and wrap this in the root of our application when using Nex.js. Since we are in
1:00:49
Nex.js, JS. Let's go inside of the root of our application and that's inside of the app folder layout. So in here simply
1:00:57
go ahead and wrap the entire application. So be careful with the component you are
1:01:04
importing. It is TRPC react provider from TRPC client. The reason I'm telling
1:01:10
you to be careful is because there are similarly named imports from packages.
1:01:16
We are not importing from any npm package. If you need to be able to command or controlclick here and it
1:01:22
should lead you to this exact component which has this little superjson error. That's the one we need to import and
1:01:29
wrap our application around because if you just do TRPC provider, you can see that that also exists, but that's the
1:01:36
incorrect one, right? It's TRPC react provider from TRPC client component that
1:01:41
is currently throwing the error. That's the one we need. Once you've done that, we have to create
1:01:48
a server.tsx. And this is where things become interesting. So let's just do that now.
1:01:55
I'm going to go inside of DRPC and I'm going to create server.tsx. And I'm going to paste this here. And
1:02:02
you can immediately delete this part. So this is just an example. If your router is on a separate server, not case for
1:02:08
us. So we can remove this. So you can see it's much simpler. Now again, we have all of this either installed or
1:02:14
already created. Great. So now that we have that, uh
1:02:20
let's go ahead and just fix this little super JSON uh issue here that I'm
1:02:25
having. So I'm using super JSON in client.dsx.
1:02:32
I'm using it in queryclient.ds. And I think I should also be using it in
1:02:37
init.ds. You can see that I have it commented out here. So let's enable this and let's
1:02:44
import super JSON from super JSON. This basically helps with serialization when
1:02:50
it comes to passing specific props from server to client components with complex
1:02:55
objects, right? Like well object, array, date, things like that. Super.json helps
1:03:00
sparse those things. Uh great. So we now created server.dsx.
1:03:07
And this is actually a very very uh interesting file and I'm going to try
1:03:12
and do my best to explain why. So that is basically it for the setup. We are now ready to use this API. So let's go
1:03:20
ahead and let's do that. In here I think they've added the most complicated example. So I'm going to try and use a
1:03:26
more familiar example first. Let's go inside of source app folder and let's go
1:03:32
inside of page.tsx and let's try and do the following. Let's add TRPC
1:03:39
using use TRPC from naturally client, right? That's our client.tsx
1:03:46
component. This is where we import everything client related. So now we have access to TRPC. You can
1:03:53
see that I can find my hello and I can go ahead and pass in the query options inside. I can find the greeting or the
1:04:01
text and I can say hello. Right, this isn't doing anything now.
1:04:08
I'm just showing you the API and how it works. So, let's just quickly go inside
1:04:13
of our routers here so you can see this change in real time and so I can give you a little tip if it doesn't change
1:04:19
for you. So, go inside of TRPC routers app and rename this from hello to, for
1:04:25
example, create AI, something like that. You can see how immediately I've gotten
1:04:31
an error here because that's how TR the RPC works. So instead of having to do localhost 3000 / AI slashcreate
1:04:41
dash AI, right, which is most of the time a literal string, right? So it's
1:04:47
very hard to u it's very easy to make mistakes, right? I can accidentally do this and this is now an invalid API
1:04:53
route, but I wouldn't know until I see a 404 error. So what the RPC does is it
1:04:59
enables full stack type safety from start to end. So if I accidentally make a mistake here, it immediately throws an
1:05:06
error like this route doesn't exist. That's what the RPC is.
1:05:12
And it is much easier to build your apps when you know that you can rely on your code rather than having to see it break
1:05:19
in production and then go and fix it. Right? So if it works inside of your IDE, if there are no errors here, it
1:05:26
will pretty much work everywhere. That's the power of having uh end to end type
1:05:31
safety. And let's go ahead and change one more thing inside of this input here. This basically represents things
1:05:38
you can send to your API. So let's go ahead and imagine an API post request.
1:05:44
Again, for example, this would be create AI. In here we would send something like body and then we would somehow you know
1:05:51
stringify this with text hello right this is a stupid example right but you
1:05:57
know what I mean uh this is also very easy to break but in here you can see that if I try sending a number here I'm
1:06:04
getting an error why because we clearly defined this needs to be a string so if I change this to uh number now you can
1:06:12
see that it works right but if I try string it will break So what happens if
1:06:18
you are not being able to see the same result as me? Right? When I hover over text, I can see the text is a type of
1:06:24
number. When I hover over create AI, I can see the input and text number and output is a greeting of string. Right?
1:06:31
Exactly as I'm typing it here. If you are seeing type any for everything, you
1:06:38
could be having a problem with your setup. So what you can do is you can go
1:06:43
uh inside of extra information and go into frequently asked questions and here
1:06:51
we have it. It doesn't work. I'm getting any everywhere. So there are a couple of
1:06:56
things you can do. The first thing is you can check your tsconfig.json
1:07:01
and in here make sure you have strict true enabled. The second thing is to
1:07:06
make sure that you are using the proper TypeScript version and make sure your editor is using the same TypeScript
1:07:12
version as package JSON. So for me, none of these things were ever an issue, but
1:07:17
I did have this as an issue and this is what actually fixed my types. So go
1:07:23
inside of your VS Code settings.json. Let me just go ahead and try and do
1:07:30
this. So settings, let me Oh, I think that yeah, you can
1:07:37
just create it if you want to. So go inside and create a VSS code like this
1:07:43
and then settings.json and you can paste this inside and then
1:07:49
you can click allow if this happens. And let me go back to page.tsx. So nothing
1:07:54
changed for me because this worked from the start. But if you're having any problems, when I say any, I mean this
1:08:02
you're getting the type any all over your project, it could be due to these
1:08:07
missing settings. So this actually fixed my problem once. So that's why I am sharing it with you. And you can always
1:08:13
do commandshiftp and then reload window and this kind of restarts the TypeScript
1:08:18
server. So then it could work maybe. Great. So now let's actually see the
1:08:24
result of this query. So make sure that you have your app
1:08:29
running and that you can visit uh your root page. And first thing you should see is this very big error. Why? Because
1:08:37
by default in Nex.js every page and component is a server component unless
1:08:43
specified differently or if it is a direct child of a client component. So
1:08:50
let's go ahead and add use client to the top. This will then turn it into a
1:08:55
client component. And you can see we no longer have these errors. We can now use hooks as much as we want. So what I want
1:09:00
to do now is show you how we actually get data from our API using a very
1:09:06
familiar use query from the package 10stack react query. And in here you
1:09:12
would usually create you know your own fetch method which would then call
1:09:17
forward slash AI create AI and then you would pass in the body right and you
1:09:24
would have the JSON stringify blah blah blah. What you can do now is the following. You can just use the TRPC
1:09:30
oneRPC create AI and pass in the query options inside text and let's try Antonio here.
1:09:38
Let's go back inside of Yeah, you can also commandclick here and it will take you directly to the router. So, I'm
1:09:44
going to change this back to string. And then what we can do is simply render
1:09:51
data. Let's just do JSON stringify data. There we go. And there we go. Greeting.
1:09:59
Hello Antonio. If I change this to John, it will change to hello John. That's how
1:10:06
we're going to fetch our data. This is our data access layer. Great. So, this
1:10:12
is the most simple way of fetching data using a client component, right? Everyone knows this. But let's go ahead
1:10:18
and cover two more examples which I think are important, right? So, we've kind of set up the RPC and we
1:10:25
experimented with a client component. Now, let's experiment with a server component. And then finally, let's
1:10:30
experiment with pre-fetching. And I'm going to try to explain what it is and why it is important.
1:10:37
So basically server components have several advantages over client components. Uh they are not of course
1:10:44
one is not a replacement of other. They work together. But server components have that advantage that they are well
1:10:50
on a server which means server components have direct access to the database for example. But in our case
1:10:56
what's important is that they render sooner than client components. Right? So
1:11:02
what is currently happening is that our application has to wait for page.tsx to
1:11:08
be rendered from the server and only then does it start fetching the data.
1:11:14
But what if we could start fetching the data on the server and then continue
1:11:21
using the data using this familiar API within a client component that is
1:11:26
prefetching. But in order to understand pre-fetching, let's first remove use client like this and let's break our
1:11:34
app. So immediately our app is broken, right? We can't use tRPC here at all.
1:11:40
Right? So now what we have to do is we have to learn how to use TRPC inside of a server component. And let me just show
1:11:46
you uh I'm going to try and do this. So if I add console log here
1:11:52
and just remove these things and just refresh, I think that you should be seeing server component inside
1:11:59
of your terminal. How come you're seeing it in the terminal? Because it is a server component, right? Because if I
1:12:06
change this to use client now and change this to client component and refresh,
1:12:13
I'm pretty sure we can still see it here. Yes, this is a bad example. My apologies. Previously in the past you
1:12:20
could not see it if it was a client component. Uh so yeah ignore this. I tried to do an example but I used a
1:12:27
wrong one. Let's just learn how to fetch data from a server component. So in here we actually have some guides. Let me
1:12:35
just go back here. There we go. So uh in here getting data
1:12:41
in a server component. So let's go ahead and simply create this little caller
1:12:47
inside of our server.tsx. So go inside of tRPC server.tsx
1:12:53
and at the end here export const caller call the app router create caller create
1:12:59
trpc context right. So there is a way you could you know fetch data from a
1:13:04
server component and that would be either you know directly calling the database like calling Prisma or there is
1:13:13
nothing stopping you from fetching inside of a server component. So you could again do create AI and then the
1:13:22
body blah blah blah right but that is unnecessary overhead because server component already has access to the
1:13:29
database right no point in doing this that's why TRPC has invented something called a caller so what you can do now
1:13:37
is let me just confirm the API you can import the caller so let's just do that
1:13:42
so I'm going to do cons data and turn this into an asynchronous server component component and await caller
1:13:49
from DRRPC server create AI and let me just see do I have to do it like this? I
1:13:55
have to Antonio server and then I believe let me just check is
1:14:02
it data like this? There we go. JSON stringified
1:14:09
data. So this is how you would fetch from a server component using TRPC using a
1:14:16
caller. So this isn't doing a network request on the server component. This is server component literally directly
1:14:24
having a remote procedure access a remote procedure protocol to TRPC.
1:14:29
That's why TRPC is so powerful because I think it's one of the only RPCs
1:14:34
available that has these types of callers. I could be wrong, but it's the only one I've seen that performs this
1:14:40
well. And this isn't so impressive right now, but if you've worked with server components before and you tried any kind
1:14:46
of RPC here, you would almost always encounter an issue that you lose
1:14:51
authorization headers, right? Uh the server component would never know if the user is logged in or not. TRPC solved
1:14:59
that problem as well. That's why I love TRPC so much because it allows us to leverage server components. So now let's
1:15:07
finally do the uh way we are going to use the RPC and that is using
1:15:12
pre-fetching. So we would do things like this const query client would be get
1:15:19
query client from gRPC server. We're not going to call the caller here but we
1:15:25
will import tRPC from here. And then in here we're going to do void t uh
1:15:31
queryclient dot prefetch query drpc create ai query options text
1:15:41
Antonio and this time prefetch
1:15:46
and then in here what we would do is we would add a hydration boundary from
1:15:52
tanstack react query. We would pass the state to be dehydrate
1:15:58
again imported from tanstack react query and pass in the query client. And then in here we would render a client
1:16:07
component. So let's go ahead and create that client.tsx.
1:16:13
This is not a reserved keyword. So this is just a component which needs use client at the top. And then in here what
1:16:22
we would be able to do is the following. We can now get the data by using use
1:16:27
suspense query from tanstack react query. And let's add
1:16:34
our TRPC from the client and pass in TRPC create AI query options. And
1:16:41
important, you need to have the exact same text here. Otherwise, the
1:16:46
pre-fetching will fail because this would usually be some kind of filter. For example, instead of text, you would
1:16:52
most likely have page one limit 10. So if you prefetch one thing and then
1:16:58
expect to have something in suspense in the client component, it wouldn't work. That's why it is super important that
1:17:05
your query options are exactly the same in your prefetch and in your client component. And then in here, you would
1:17:12
be able to do JSON stringify data. And now let's go ahead and let's do
1:17:18
this. So let's go inside of here. Let's import client from dot /client and let's wrap this
1:17:26
inside of suspense from react and let's add a fallback here
1:17:34
loading. So what's going on here?
1:17:39
Basically instead of directly calling the data inside of a server component what we are
1:17:46
doing is we are leveraging t uh we are leveraging tanstack queries cache and
1:17:52
state and we are immediately populating it the moment server component gets
1:17:58
created the moment server component loads because this will then allow the
1:18:04
client component to load whenever it loads because we know a server component will load sooner than client component,
1:18:10
but this time the client component won't have to wait until it gets loaded and
1:18:16
only then initiate a network request. Instead, it will already have the data
1:18:22
ready even though because we prefetched it inside of a server component. And
1:18:28
it's very important to use a void here. And this prefetch query actually doesn't return anything. So even if you tried
1:18:35
things like this, this wouldn't work. it doesn't return anything. They've done that on purpose so you don't uh so you
1:18:43
don't actually use this data because pre-fetching query all it does is it
1:18:48
initiates a call on a server component but only for the sole purpose of populating
1:18:54
uh tanstack query which can then be accessed in a client component. So we are leveraging server component to start
1:19:03
fetching our data immediately and then we are passing it down to the client
1:19:09
component which uses a familiar API. So because this is use client, we can now
1:19:14
go ahead and have a use effect here, right? We can go ahead and we can have a
1:19:20
state here, right? We can do all of these things and it would work as fast
1:19:26
as if we did the entire thing in a server component. So we don't lose the familiarity of client components and we
1:19:33
also don't lose the speed of server components. We basically get the best of both worlds by doing this. And let's
1:19:41
finally try it out. You can see it works just fine. I know this is still a bit
1:19:46
confusing. I try to explain it the best I can. I would highly suggest, you know, reading about prefetching and just going
1:19:53
through uh this documentation in the first place. Perhaps Dave explained it a
1:19:59
bit better, but this is how I like to explain it. Basically, we are now getting the best of both worlds. both
1:20:05
the speed of server components and the familiarity of client components
1:20:12
and I think that this officially uh marks the end of this chapter right so
1:20:17
let's just remove these things because we don't need them and what we're going to start doing in the next chapter is
1:20:23
finally initializing our uh background jobs and start introducing some
1:20:29
background actions we now have our database we have our OM and we have our data access layer. So those are the
1:20:36
three things that we need so we can start saving uh some data in our database properly. Right? So let's go
1:20:43
ahead now and mark this as completed. We did all of these things and let's go
1:20:49
ahead and branch out now. So I'm going to go ahead and go down here and create
1:20:54
a new branch. I'm going to call this 03 DRPC setup. I'm going to go inside of my
1:21:02
source control here and I'm going to stage all changes and then I'm going to
1:21:08
add 03 TRPC setup comment and I'm going to commit and then I'm going to uh
1:21:16
publish the branch. Then let's go ahead to our GitHub to
1:21:21
open a pull request. So in here compare and pull request and
1:21:28
let's create a pull request. And as you can see I have something that
1:21:36
you probably don't in your pull request and that is an AI code review using code
1:21:44
rabbit. As you can see not only do I have a complete summary of this pull
1:21:50
request. As you can see, we introduced TRRPC integration for type safe API calls between client and the server and
1:21:57
we also added some chores. Not only that, but I have a change file by file
1:22:02
summary so you can see exactly what I did in each file. And I also have a
1:22:08
sequence diagram explaining exactly how every single component works in which
1:22:15
order and how it responds with data and result, which is especially useful if
1:22:21
this is your first time working with the RPC and Tanstack query.
1:22:26
And I also have some potential issues it caught. For example, we added this dummy
1:22:33
TRPC context from the documentation. Right? So, it noticed that and it told
1:22:39
me that I should replace this hard-coded user ID with proper authentication. In
1:22:44
this exact case, it is okay for us to proceed because this is just uh our
1:22:50
initial TRPC code. We will replace this later when we add authentication. But you can see how it already started
1:22:56
noticing some potential issues in our code. And then it also told us to change
1:23:02
this further on when we update this React context. So it actually
1:23:07
understands our code very very indepth. If you're interested in having the exact
1:23:13
same code review, you can use the link in the description or the link you can see on the screen and create a Code
1:23:21
Rabbit account. But that is not all. So now I'm going to go ahead and merge this
1:23:26
right here. Let's merge this pull request. I'm not going to delete my branch simply
1:23:34
so I have access to it right here. So this was our previous chapter and now we have TRPC setup. And you can see that I
1:23:41
got this popup in my Visual Studio Code as well asking if I want to start a
1:23:46
review inside of my Visual Studio Code. So, since I just reviewed my code uh in
1:23:53
a pull request, I'm going to click no. But I'm going to show you in a second what this is. So, before we proceed, go
1:24:00
ahead and make sure you change back to your main branch. And then just click on
1:24:05
this little button to synchronize the changes. And then when you click on a graph here,
1:24:12
you should see our last one was a database commit. And then we merged that. And now we branched out for TRPC
1:24:19
setup. and we merge that back inside. And what I suggest you install is Code
1:24:26
Rabbit extension. So Code Rabbit is a completely free VS Code extension. You
1:24:32
can go ahead inside of your extensions here, Code Rabbit, and install it. And
1:24:38
if you don't want it connected to your pull requests, you can have complete
1:24:43
free code reviews in your Visual Studio Code. All you need is an account with
1:24:49
Code Rabbit. You can use the link you can see on the screen and you will get amazing pull request reviews, but also
1:24:55
you will get completely free code reviews in your IDE. We're going to try
1:25:00
that in the next chapter because we just reviewed our code in a pull request this time. So again, just confirm you are on
1:25:07
your main branch and you have synchronized all changes. And that will allow us to continue to the next
1:25:13
chapter. So let's go ahead and mark this as done. Amazing job. We now have the
1:25:20
database access, our ORM, and our data access layer. We are finally ready to
1:25:25
start doing some AI related things and background jobs. Amazing, amazing job. And see you in the next chapter.
04 Background Jobs
1:25:34
In this chapter, we're going to learn all about background jobs. We're going to learn how to add them to an Nex.js GS
1:25:40
application and we're going to learn what they are and why we need them. In
1:25:46
order to understand that, let's first look at a normal example. Imagine a login form. You enter your email, your
1:25:54
password, you click login, we send a network request, and we get an instant response. Success or fail. We've already
1:26:01
seen this a million times. But now imagine you have a more complex task at
1:26:07
hand. Imagine you offered your user an ability to generate a summary of a very
1:26:13
very long YouTube video. Imagine my videos for example, they are sometimes
1:26:19
12 24 hours long. So this time we send a network request.
1:26:25
And in order for our backend to generate this summary, it can take well over 30
1:26:31
seconds to do that because just imagine everything that needs to happen. We first have to download the YouTube
1:26:37
video. Then we have to transcribe the video and only then can we send that to
1:26:43
an AI model to generate the summary. So depending on the size of the video, depending on the AI model you will use
1:26:49
and depending on your overall infrastructure, it can take well over 30 seconds for that to finish. And if you
1:26:56
have a task that's running for so long within a normal network request like this one, you know, something completely
1:27:03
normal, you risk your user never getting the result. So the problem is not that
1:27:10
the user has to wait. The problem is this network request can time out, the
1:27:16
user can accidentally close the tab, or the user can lose their connection. If
1:27:21
any of these things happen, the user will never get the result back and we have to start the entire process again.
1:27:27
That's why we have something called background jobs. So let's imagine this again. The user clicks generate summary.
1:27:34
This time we send a network request again, but instead of using our backend to generate the summary, we use our
1:27:41
backend to invoke a background job. And the moment we've done that, we are
1:27:47
finished with our network request, which means that we immediately return back to the user and say the summary is being
1:27:54
generated and the user can now close the tab, they can go for a run, they can do whatever they want. What's actually
1:28:02
happening is that the moment we invoke a background job, the background job now
1:28:07
runs in a separate environment independent of the user's session,
1:28:12
independent of the user's connection, right? And we can simply notify the user when we are done. This is the structure
1:28:20
you have to understand if you want to build AI apps because depending on the model you will use and the complexity of
1:28:26
the app you will build most of your tasks will be longunning tasks.
1:28:32
We will achieve this in our project using ingest. So let's go ahead and
1:28:38
create our first function and let's trigger a background job from nextjs.
1:28:44
You can use the link you can see on the screen or the link in the description to let them know you came from this video.
1:28:50
And once you're here, you can immediately go inside of the documentation, select NextJS,
1:28:57
and select app router here. And then let's go ahead and install inest.
1:29:03
Before you do that, just make sure that you are on your main branch. And you can click synchronize changes just to
1:29:10
confirm uh you didn't have any unsaved changes here. You can see my last
1:29:15
chapter was TRPC setup and yours should be as well. So I'm going to shut down my
1:29:21
app now and I'm going to do npm install injust.
1:29:27
And now that I have this installed, let me quickly show you my package JSON so you can see the version that I'm using.
1:29:35
Once you have installed Injust, the second step is to run the Ingest developer server.
1:29:43
The version that I will be using is 1.8.0.
1:29:48
But you can see that in here they simply target the latest version. So when you
1:29:54
see me now doing this npx inest- cli at latest, the latest is equivalent to
1:30:02
1.8.0. zero just in case you were interested in my exact version. So, npx inest- cli at
1:30:13
latest or a specific version and then dev. And when I start this, you can see
1:30:18
that it says injustdev server is online at localhost 8288.
1:30:23
And if I visit the project here, well, you can see that not much is going on here. It is a developer server, but
1:30:30
nothing is here for us to do. So what we have to do now is we also have to have
1:30:36
our app running. So let's do mpm rundev. And in here you will start to see
1:30:43
something. You will start to see a bunch of 404 pages here. That is because the
1:30:48
ingest developer server is trying to find our inest initialization in our
1:30:54
project. But since we haven't done that, we just have a bunch of 404s. So let's go ahead and continue with the
1:31:00
documentation here. I'm going to go ahead and create an ingest folder and then put a client.ts
1:31:08
inside with this simple code snippet. So let me go ahead here inside of source
1:31:16
and I will create a new folder called inest and I will create client.ts
1:31:22
and I will paste this inside. I'm going to call this Mine project or Mine
1:31:28
development something like that. basically the name of your project here and once you've
1:31:34
done that you should oh actually not yet sorry so this is the first step and then
1:31:41
we come to the second step which is creating an API endpoint for ingest so
1:31:46
you can copy this snippet as well and go inside of app API create a new folder
1:31:52
ingest and inside go ahead and create route ts
1:31:58
and paste this inside and you and replace this with an add sign and a forward slash. There we go. It's
1:32:05
basically using this inest which we just created. And the moment you save this file, if you have named it correctly and
1:32:12
put it in the API folder, you should go here and you will see that
1:32:17
now you finally get 200 here because it finally found the ingest integration and
1:32:23
now it will only try to hit that endpoint instead of all of these other ones.
1:32:30
Great. But we still don't have anything useful in the developer server here. So
1:32:35
let's go ahead now and let's continue by creating the first ingest function.
1:32:42
So I'm going to go here inside of source ingest functions.ts and create a new function. So inside of
1:32:50
ingest folder in the source, make sure you don't accidentally do this inside of API inest. So in here create functions.
1:32:58
Whoops. Functions. DS
1:33:03
import the client and a simple hello world in just create function. We give this an ID. We give this an event name.
1:33:10
And we have a very simple step which waits for 1 second and it then returns a
1:33:17
dynamic string which uses the data we can pass to this background job. So this
1:33:22
is an example. So they show us how easy it is for us to pass some data to this background job. This would be for
1:33:29
example a link to a YouTube video we want to summarize, right? That's what
1:33:34
this data object would hold. For example, I think I have a typo in my
1:33:39
functions here. So, let me just fix that. And then let's go inside of the app folder API inest route and inside of
1:33:45
here, let's import hello world from that inest functions file. And now if you go
1:33:53
back here you should be seeing uh your app here available auto detected. You can see
1:34:00
everything is fine. It found it at API inest framework next.js and one function
1:34:07
found hello world because we just added it here. So if I rename this to hello
1:34:12
world 2, it immediately renames here as well. And now instead of these
1:34:18
functions, let me just refresh. So, it's back to this name. I can now click invoke here. And you probably have empty
1:34:24
data, but you can go ahead and add email and pass in I don't know it it can even
1:34:30
just be the name. It doesn't matter. And click invoke function. And you will see how it went from ceued to running to
1:34:37
completed. So that's the status that just happened. It happened very quickly because uh there wasn't no no no one
1:34:44
there was no function before this. So the queue to running went very fast and the running only took 1 second because
1:34:51
we only wait for 1 second. For example, let's now increase this to 10 seconds
1:34:58
and save the file. And let's go inside of our functions invoke and let's click
1:35:04
this again. You can see how now it keeps running. It's running for 5 seconds, 7
1:35:12
seconds, and finally after 10 seconds, it's finished. Is this getting familiar
1:35:18
to what we just discussed? This is a background job. The only problem so far
1:35:25
is that we are not invoking this function from our network request. We are manually clicking on invoke here.
1:35:32
How do we invoke this from in our case TRPC procedure? Let's go ahead and let's
1:35:38
do that. So I'm going to go inside of source trpc
1:35:44
routers_app and in here I'm going to call this invoke. This will be base procedure and
1:35:52
let's add an input here z.object and let's pass in the text to be z dot
1:36:00
string like this. And then instead of dotquery, let's add dot mutation. This
1:36:07
time it's going to be asynchronous here. Let's extract input from here
1:36:15
like this. And this time what we're going to do is await inest from injust
1:36:21
client. The name of the function
1:36:28
you can find here. This is the name of the function you will run. So pass that here and then you pass in
1:36:36
the data and the data can be anything you want but we know that we accept email here. Uh so let's go ahead and
1:36:43
pass email to be input.ext because we defined it as text here. And
1:36:50
this is how you invoke a background job from TRPC. So now let's go ahead and
1:36:56
actually use this invoke method. I'm going to go inside of source at folder
1:37:02
and I'm going to go inside of page.tsx here and uh well we already have this
1:37:10
set up but since we are not going to need it I'm going to delete it for now. I'm going to delete this client.tsx.
1:37:17
I'm going to go back inside of the page here and I will simply return a div here
1:37:23
test and I will remove everything from here. We only use this to learn about
1:37:29
the RPC. So let's mark this as use client. So this becomes a client component. The use client is very
1:37:36
important for our demonstration here. So please do it. Now when you refresh on your local host 3000, you should just
1:37:42
see a test here. So now let's go ahead and let's create a padding for maximum
1:37:48
width 7 XL MX auto. And in here let's
1:37:53
add a button component. invoke background job.
1:38:01
And there we go. We now have a button to invoke a background job. So let's go
1:38:06
ahead and add TRPC here. Use TRPC
1:38:12
and let's add invoke from use mutation from tanstack react query. Pass in
1:38:19
tRPC.invoke and pass in the mutation options here.
1:38:26
And then in here on click call invoke
1:38:32
and call mutate and pass in the text to be test or John
1:38:41
something like that. So what I want to demonstrate to you now
1:38:46
is how quickly this background job uh lasts in comparison to the network
1:38:52
request. So, I'm going to go ahead and open my developer console here. I'm going to go inside of the network tab
1:38:59
and I will click invoke background job and let me just see did I even do
1:39:05
anything now or not because I I'm definitely expecting to
1:39:10
see something here but it is not uh happening.
1:39:17
Let me refresh the page.
1:39:22
All right. So my website froze. So what I did was I simply shut down my app and
1:39:29
I did npm rundev again. So I'm hoping to try it out again. This time
1:39:36
successfully. There we go. Now when I click on invoke a background job, you can see how
1:39:42
quickly this finished. Let's just see. 468 milliseconds. That's how long this
1:39:50
network request took. But we know that the actual background job took 10
1:39:56
seconds. So that is what we wanted to achieve. If I go inside of the RPC
1:40:02
invoke again uh and inside of the ingest and go inside of the functions, let's
1:40:07
change this to 30 seconds and add a comment here. You know, imagine this is
1:40:13
a u download step right here. In here we are downloading a video. Then in here,
1:40:20
imagine this is a transcript step. Another 10 seconds. And
1:40:26
then finally, you know, imagine this is a summary step. And this finally then
1:40:33
takes 5 seconds. This is what we want to achieve, right? The moment we click on
1:40:40
generate summary, we send a network request. We trigger a background job and
1:40:45
we immediately allow the user to close the tab. Right? So let's try it again.
1:40:50
Uh in order if you want to you can also do this. You can go inside of your layout
1:40:56
in app folder and you can add a toaster
1:41:01
from components UI soner like this. I just like to order the
1:41:08
components like so. And now once you've added the toaster you can go inside of the page here go inside of mutation
1:41:15
options and add on success here. And you can add toast from soner.su
1:41:22
success background job started.
1:41:29
And now you will see the following. If your app gets stuck, you can go ahead and just do mpm rundev again. Uh I did
1:41:36
get this happen a few times and I think I solved it when I removed the turbo pack, but we'll see. Basically, if your
1:41:43
app hangs on loading, don't worry. You can just uh restart it. it will not happen in the actual app. So let's try
1:41:50
this now. Uh we can also do disabled here and let's do invoke is
1:41:57
pending like that and we can also go inside of
1:42:04
invoke function here. the RPC invoke and after a wait let's return
1:42:11
okay success like this so now if you click invoke
1:42:19
background job you can see this is it the request is finished right the user
1:42:25
can now close their tab and what's happening is in the background right we
1:42:31
are now doing the first step which would be 30 seconds of downloading a YouTube
1:42:38
video. After that, we're going to go ahead onto the second step, right? Which
1:42:44
would be transcribing a video. So, let's see. After 30 seconds here is finished,
1:42:50
we go to the second step. And this step will last for 10 seconds because we just
1:42:57
wait for transcription to happen. And then finally, we have a third step. And
1:43:03
in here we would do the AI summarization. And that's it. Hello John
1:43:09
or this would actually be the summarization. Right? So that is how background jobs work. And that's how you
1:43:16
add them uh in a Nex.js environment. Right? And it doesn't matter if the user
1:43:22
lost their internet connection. It doesn't matter if they're closed the tab because the moment they invoke a
1:43:28
background job, the background job has started. they can lose their internet connection. Obviously in development
1:43:34
mode if you lose the internet connection your dev server would fail. So yes in development technically you need you
1:43:42
cannot really shut down your laptop but in production it will run on a separate
1:43:47
server in a separate environment right and from this inest developer server you can easily cancel things if you don't
1:43:54
want to you can rerun them uh you can go ahead and look at the payload that was added you can do a bunch of things here
1:44:01
uh and one cool thing about ingest steps is this will later be of course more
1:44:06
complex things than just sleeping for 30 or 10 seconds. This will be API calls, database requests and if they fail, it
1:44:14
is crucial to well retry them and that is what inest does automatically for
1:44:20
you. Uh they actually have a cool example on their landing page here. They
1:44:25
have uh and yes they have agent kit. This is something I didn't want to talk about immediately because I don't want
1:44:32
to confuse you, right? So uh alongside background jobs, we're going to use injust to build autonomous agents,
1:44:38
right? So AI and background jobs go hand in hand and Injust is the platform to do
1:44:45
both of that. But I first want to introduce it through background jobs because it's easier to understand,
1:44:50
right? And in here they have three very cool examples. So this is the transcription example. You can see that
1:44:57
uh they have a step called transcribe video. So it's very similar to step.slip, slip, but instead it is
1:45:03
step.run and they call it transcribe video and in here they simply return a deepgram SDK
1:45:11
with a function to transcribe a video URL and once this steps finishes they
1:45:17
call an LLM chat GPT uh GPT4 to create a
1:45:22
summary. So exactly what we did. So this would be the two steps right this would be the first one you know transcribe the
1:45:29
video and then the second one summarize the video right I just use a download
1:45:34
step as well so looks like we don't need a download step right so this is what you can use in just for the second one
1:45:40
is to build AI with automatic retries cach caching and improved observability
1:45:47
right so it's way more powerful than I can showcase in this short chapter
1:45:53
that's why We will have more chapters later on to build the actual agent networks, agent router, and agent tools,
1:46:01
right? And of course, you can do sleep, which right now seems only for fun, but
1:46:06
sleep can be very useful. For example, you can send a welcome email to a user, then wait a week, and then send a
1:46:13
follow-up email. So, yes, that's how long these tasks can wait. They are
1:46:18
background tasks. Uh, perfect. Yes. And for development, you don't need any
1:46:24
account yet. But later uh for production, for deployment, we're going to have to create an account with
1:46:30
ingest. But for development, there's going to be no need for that as well. And I think that's great because we can
1:46:35
get started right away just by running this. Perfect. So I think that was the
1:46:41
goal of this chapter. I think we achieved this exact thing right here. So
1:46:48
we set up inest. Let me just change the color. So we've set up inest. We created
1:46:53
the first function. We explored the ingest developer server and we triggered a background job from Nex.js. Now let's
1:47:01
go ahead and branch out and push this to GitHub. So let me see this chapter name. This is 04 background jobs. So I'm going
1:47:10
to go ahead and click here. You can see that I have 10 unsaved files. And I also
1:47:16
have this little database in the inest folder. If you're wondering what that is, I'm just guessing it's cache for the
1:47:21
inest developer server. And now I'm going to go and click on the main here. I will click create new
1:47:28
branch and I will do 04 background jobs.
1:47:34
After I've done that, I'm going to stage all of my changes and I'm going to create a commit message
1:47:42
and I'm going to click commit. And then you can see that code rabbit extension
1:47:47
if you remember from the previous chapter uh you can install this a completely free AI code extension which
1:47:54
allows you to review all of those files. So let's go ahead and review all of
1:48:00
these files and while this is doing its own thing which is most likely a
1:48:05
background job on its own. So you can see uh you can see background jobs every day right? You probably just didn't know
1:48:12
they were called background jobs. While that is going on, let's go ahead and
1:48:17
let's create a new pull request inside of our repository here. So, let me go inside of pull requests here. Uh, new
1:48:24
pull request. Uh, oh, looks like it won't push until
1:48:30
uh this reviews. So, I'm going to go ahead and review first.
1:48:35
Actually, it will. I just have to click publish branch. Yes, I forgot to click that. So, make sure you click publish
1:48:41
branch. And you can see that this is still doing its own thing in the background. And I think now that we have
1:48:46
a new branch. There we go. I forgot to do that. My apologies. So, now we're going to have two uh AI reviews here.
1:48:53
One is going to be from here and the other one is going to be from here. And you can see how cool it is that it can
1:49:00
add comments on my code locally here in my
1:49:06
There we You can see fox fix duplicate step ID. So it noticed that all of my steps are called wait a moment uh which
1:49:14
is very you know not useful uh when you were reading inside of the ines
1:49:19
developer server. So it already detected that for example. So you can see how cool it is and it also fixes some wrong
1:49:28
things here. Payload mismatch with ingest function. This is of course not
1:49:33
something that uh we need to fix right now simply because this is a demo. But
1:49:38
it is very useful. As you can see, it detects pretty much everything. So if
1:49:44
you don't want it here in your pull requests, you can have it here in your
1:49:49
uh IDE. And here we have our pull request
1:49:56
summary which is pretty much identical as you can see uh to the reextension for
1:50:04
Visual Studio Code. You're going to see in here we have fix duplicate step ids
1:50:09
and you can see that here at the bottom I have the exact same issue here. So you
1:50:15
can choose which one do you like more. Do you like your pull request reviewed or do you want to submit clean pull
1:50:22
requests by having this run before you push a pull request? So in here I'm
1:50:29
going to read through the pull request simply because we have the summary here. So we introduced an API endpoint to
1:50:36
handle background jobs using inest. We added a button on the main page to
1:50:41
trigger a background job with real-time toast notification on success. We use
1:50:46
this to visually measure how quickly the network request is finished in uh comparison to how long the background
1:50:53
job actually lasts. Right? And this is what I like the most. I like the sequence diagram because it is exactly
1:51:01
what we discussed in the beginning of the chapter. So the user clicks on
1:51:06
invoke a background job. We send the invoke mutation with the text and then
1:51:12
our TRPC router which is our network request simply sends the event with that
1:51:20
data. This can basically read as invoke a background job and the moment we do
1:51:27
that we can send back the user. Okay, success. So this part right here is
1:51:35
identical to what I wanted to achieve here. The user clicks, we send the
1:51:41
network request, we forward the data to a background job, and we immediately respond to the user so they can close
1:51:48
the tab and move on. And the fun thing about this background jobs is the way
1:51:55
Code Rabbit just reviewed my 10 files here is by using a background job. They
1:52:01
definitely didn't have a network request which went on for 30 seconds. They had a
1:52:07
background job which did this exact thing. So I went through this potential
1:52:14
changes. They are all very correct. But since this was just a demonstration, it
1:52:19
makes no sense to fix them right now because we will remove the whole page entirely uh in the first place. Right?
1:52:26
So we are good to go with merging this pull request right here. I'm not going
1:52:33
to delete my branch simply so I can go back to this part whenever I want. Uh
1:52:39
and let's go ahead now right here. Let me close this. Let's go
1:52:47
back to our main branch. Let's click this and let's synchronize our changes.
1:52:53
And after that, I'm going to click no on this. I'm going to go inside of my
1:52:58
source control on the graph. And you can see that I have 04 background jobs now
1:53:05
merged right here. And you can see that I'm on the main branch. And I should have access to my inest folder here,
1:53:12
which basically means we fixed all these things. Perfect. I'm also not going to
1:53:18
do uh anything regarding this code rabbit uh comments here simply because all of this was just a demonstration.
1:53:26
Amazing amazing job. Let's go ahead and mark this as complete now
1:53:32
and see you in the next chapter when we are going to extend the use of our background jobs with AI. Amazing amazing
1:53:39
job. In this chapter, working to implement AI
05 AI Jobs
1:53:45
background jobs. In order to do that, the first thing we're going to have to do is choose our AI provider. In here, I
1:53:54
have added a list of all the options that we have and some comments for each
1:53:59
of them. Starting with the best choice, which is Open AI. It is by far the most
1:54:08
reliable, the most normal rate limit with a fast reset and a very very good
1:54:16
coding model. This is the coding model that I have chosen GPT4.1
1:54:22
and it is almost perfect. The absolute best coding model though is cloth
1:54:30
specifically set 3.5 or 4. They are kings of coding models. The problem with
1:54:38
anthropic is a very strict rate limit and when you hit the rate limit it will
1:54:45
take you longer than 24 hours for that rate limit to reset. So it's it is just
1:54:51
very very annoying to work with. If you want to, you can choose anthropic, but
1:54:57
you will almost certainly hit a rate limit and you're going to have to either change the model or create a whole new
1:55:04
organization and account. So, basically, Anthropic allocates their resources to
1:55:11
uh higher paying customers, right? Which are this very very large companies. So, it's not exactly suitable for tutorials.
1:55:18
As per Grock or XAI, I'm not sure. I haven't worked with it. It is on the
1:55:24
list of the supported AI models, so I don't know. I won't recommend it and I
1:55:30
won't tell you not to use it. I I'm not sure. And as for Gemini or Google, the
1:55:36
great thing about Gemini is the amazing free tier. The biggest problem with it
1:55:41
for our use case, it is just not good for calling tools. It will straight up be errors all around. So because of that
1:55:49
at this moment I just don't recommend it. Uh I've heard that Grock AI has free
1:55:55
tier. So I would rather you use Grock than Gemini. So unfortunately at this
1:56:02
point I cannot recommend Gemini. It is okay for this simple chapter that we're
1:56:09
going to do now, but later when we use AI for the thing we will actually need to use it for, it will simply not work.
1:56:17
So if you really need a free tier, you can try and use Grock rather than Gemini.
1:56:23
The absolute best choice and the choice that I will be using is Open AI, specifically this model. As I said,
1:56:30
there is a chance we might hit the rate limit here, but the reset is around 2
1:56:35
seconds, which is completely fair and it will happen rarely, only when we are doing some very very large uh tasks.
1:56:44
With Enthropic we get the amazing results. It completely understands Nex.js ecosystem. It understands what
1:56:50
chats and UI is. But once you hit a red rate limit and you will hit it very
1:56:55
soon. It is almost impossible to get rid of. You will almost be stuck in a rate limit. So in my opinion, choose Open AI.
1:57:05
It is the simple best solution for this project. If that is possible for you,
1:57:11
you will have the best uh experience using Open AI. And now I'm going to show
1:57:16
you uh how you can find if any changes have been made regarding this uh if
1:57:23
you're watching this tutorial in the future. So you can use the link in the screen uh again or link in the
1:57:29
description to visit ingest and in here go to the documentation and then go
1:57:36
ahead and find agent kit and in here go ahead and click on this support for
1:57:42
openai anthropic and gemini or click on the models here. So in here you will see
1:57:50
all supported models as you can see open AAI anthropic Gemini and Grock as I said
1:57:58
even though Gemini is supported here I just wasn't able to get it to work if
1:58:03
you want to you can try but I wasn't able to get it to work. Anthropic worked
1:58:09
amazingly, especially the 3.5ET versions, but the rate limits were very
1:58:15
easily hit. The Open AI, I initially tried with 4.0 and I really was not
1:58:21
satisfied with the results. It's not that good. But even though it's not on this list, you can try 4.1. So, that is
1:58:28
confirmed. I tested it myself and it works no problem and it's amazing. Not
1:58:34
as good as Enthropic 3.5, but very very good and very reasonable rate limits. So
1:58:41
what we have to do next is we have to create our account in one of these providers. I'm going to show you what I
1:58:48
do with OpenAI and then you can do whatever you want to choose here. In my
1:58:54
case, I'm going to go ahead to platform.openai.com. You can use the link you can see on the
1:58:59
screen or link in the description. Once you've created your account, you're going to go ahead into settings.
1:59:06
Once you are in the settings, you're going to go into billing. In here, it is very important that you have a credit
1:59:13
balance. So, maximum of $10, even less, will be enough for you to complete this
1:59:19
tutorial many times, which will of course depend on how often you create uh
1:59:25
new uh websites and uh apps with this project. but I barely spent that amount
1:59:31
and I tested pretty heavily. Once you have uh filled your account, you can go
1:59:37
ahead and obtain an AI key. If you're using Grock or Gemini, you have a free tier, but as I said, Gemini just doesn't
1:59:44
work. Uh and Grock, I'm not sure. You can try. So, let's go ahead and let's create a new secret key. I'm going to
1:59:51
call this Mine development. I will use the default project and I will select all permissions and I will create the
1:59:58
secret key. I will then copy this key and then what we have to do is we have to add that to our IDE I mean to our
2:00:05
project. As always ensure that you're on your main branch and you can synchronize the changes just to make sure you're up
2:00:12
to date. As you can see my last chapter was background jobs. So now what I'm going to go is I'm going to go inside of
2:00:19
environment here and I'm going to create open AI here
2:00:24
open AI API key and I will paste it inside like this. If you're using
2:00:30
something else let me show you how to add that. So I'm going to go inside of the inest uh agent kit documentation
2:00:37
here and here you have it environment variable used for each model provider. If you're using OpenAI, it is OpenAI API
2:00:46
key. If you're using Anthropic, it's Enthropic API key. If you're using Gemini, it is Gemini API key. Or if
2:00:53
you're using Grock, it is XAI API key. So, make sure that you've added one of
2:00:59
those here. Perfect. Now that you have done that, let's go ahead and do the
2:01:04
following. Uh, go inside of the agent kit by ingest and go inside of
2:01:09
installation. and let's go ahead and install inest agent kit. So, I'm going
2:01:15
to go ahead and install this and I'm going to show you the version.
2:01:21
Once this has been installed, I'm just going to go inside of the package JSON and show you the version 0.8.3.
2:01:29
That's the version I'm working with. Now, let's go ahead and let's use the
2:01:34
agent kit. In order to do that, I just want to do the following. Let's go ahead and do npm rundev. And let's go inside
2:01:41
of source app folder page.tsx. And in here, what I'm going to do is the
2:01:48
following. I'm going to add a simple input from components UI input. And
2:01:54
above this tpc methods, I will add value set value and a simple use state from
2:02:00
react. Make sure you import that. I'm then going to give the input a value and
2:02:05
on change a simple event calling set value and setting it to event target
2:02:14
value. You've probably done this 100 times. And this will simply be uh it can
2:02:21
stay invoke background job. It doesn't really matter. Great. So now let's go
2:02:26
ahead and run npx inest cli latest dev.
2:02:32
Simply so we have both our app and the dev server running. And now let's go ahead and do the following. Let's go
2:02:39
inside of our inest functions here. And let's just remove this one. Leave this
2:02:46
one for 5 seconds like this. And change this to
2:02:53
um let's just say input. Let's call it that. And then I'm going to change this
2:03:00
to be input as well. Actually I'm going to change it to be value. So we control
2:03:06
it from this input here. I'm going to go instead of the invoke tRPC method. So it is inside of routers here. I will change
2:03:13
this to be input. I will change the input to be input.
2:03:18
Well, I just call that in a dumb way, didn't I? Why don't we just call it value? That would be better. Sorry. So
2:03:26
let's go inside of invoke change this to value input dov valueue and call this value and then make sure to save this
2:03:33
file go back inside of the functions and change this to hello event data value.
2:03:40
So let me show you the changes again inside of the page we added use state and the input with value and set value.
2:03:47
We then added a control to this input with those fields and we modified slightly the invoke.mmutate to pass in
2:03:54
the value to be the value from the state. We then modified our TRPC router
2:04:00
to accept value in the Z object and we've accepted we changed uh the ingests
2:04:06
send to pass in value in the data object and of course we modify the function to
2:04:12
read dot value and we removed an extra waiting step.
2:04:18
So now that you've done this let's go ahead and let's run our app on localhost 3000 and let's open our uh development
2:04:26
server here. So now I'm going to call this uh test value and I will click
2:04:31
invoke background job and then in here in the running uh text I should see
2:04:37
value test value here and in finalization hello test value. So exactly what we pass here. Perfect.
2:04:44
That's a very good setup. Now that we have agent kit installed let's go ahead and do the following. in the inest
2:04:51
documentation which is outside of the engine agent kit you can find a very very simple example by going inside uh
2:04:59
let me just find inest functions step and workflows AI interference here and
2:05:06
in here where they show you agent kit for the first time uh they show you this
2:05:12
very very simple uh way of doing it so this is what we're going to do I'm going
2:05:17
to add the following import. So let's now go inside of inest functions here
2:05:25
and I'm going to add this agent agentic open AI as open AI and
2:05:33
create agent from inest agent kit and then I'm going to go ahead and open
2:05:41
this function. It's already opened, right? So basically I'm going to now write inside of here. You can leave this
2:05:46
hello world. This can be unchanged. Let's create a new agent like this.
2:05:53
So let me just show you this. And you can remove this.
2:05:58
It is directly open AI, right? And you can remove the step here as
2:06:05
well. So instead of writer, let's call this summarizer.
2:06:11
The name will be summarizer. You are an expert summarizer.
2:06:18
You summarize in two words. So something very obvious,
2:06:26
right? A very easy task. You can give it a model GPT40 if you're using Open AI.
2:06:32
And let me just remove the things I don't need for now. Let me remove the step from here since I don't need it. So
2:06:39
in here we open a summarizer agent like this. And since I'm using open AI, these
2:06:46
are the models that I can use. One of them is CH GPT40. If you import
2:06:52
anthropic from here, you can see that then you're going to
2:06:58
have to choose one of these models. So just pick the one you like. And same is true for XAI or Gemini, whatever you
2:07:04
ended up using. So now we have to find a way to invoke this summarizer with event
2:07:10
data value. And since you saw when I copied this
2:07:17
import, I had to fix the invalid OpenAI import because I've copied it from here,
2:07:24
right? So it would be best if you follow the instructions for agent kit on the
2:07:29
actual agent kit documentation. Again, you can find it right here under agent
2:07:36
kit. I simply used this one because I thought it was a very similar example to what we discussed in the previous
2:07:41
chapter with the summarizer, right? But I think it would be better for you to follow the agent kit documentation here
2:07:48
because this is the one that is kept up to date constantly. So please follow this one. So you can again go inside of
2:07:53
the agents here and you can find this exact thing we just did. We created an agent. We called it summarizer and we
2:08:00
gave it uh a system prompt and then we gave it a model. So we did that
2:08:06
correctly. Now what we have to do is we have to run it. So let's go ahead and do
2:08:11
that right here. I'm going to go ahead and add this summarizer
2:08:17
summarizer.run like this. And let's go ahead and learn
2:08:22
what to type here. So I'm going to go ahead and add summarize the following
2:08:30
text and I'm going to open back. So I can insert
2:08:36
event data value like this. And now let's go ahead and add a weight here.
2:08:45
And now we have access to the output here. Uh so let me just see. I'm not sure if I know the API by default, but
2:08:52
let me try output first in the array. Is it uh like that? I'm not exactly
2:08:59
sure. Let's try and let's just say success. Okay, here. And let's rely on the
2:09:06
console log. Or perhaps we can just return out the whole output like this.
2:09:11
Maybe this would be easier to work with. So we just created a very simple summarizer agent which is an expert
2:09:18
summarizer and can summarize in two words. We imported open AAI and create agent from inest agent kit new package
2:09:25
that we have installed. We specified a GPT40 model. Another hint here uh I mean
2:09:32
just I'm basically just repeating what we previously went over. make sure that your environment variables are properly
2:09:39
set because as you can see we did not define the API and variable here. So it
2:09:45
will search for it itself. So the name is very important. But if you want to name it differently for whatever reason
2:09:52
you can do that and I think that inside you can pass the API key and then you can call this you know API key if you
2:09:59
want to or if it's not managing to find your environment variable for whatever
2:10:04
reason. Let's try this out now. So, I'm going to go ahead um and honestly, I don't know
2:10:13
how this will perform. So, I'm going to call this I am Antonio and I am a
2:10:18
developer. Let's go ahead and try and doing that.
2:10:24
So, in here, as you can see, it immediately finished and you can see the step was called summarizer and you can
2:10:31
see the content inside. So the content is you are an expert summarizer. You
2:10:37
summarize in two words. And then we passed in the role user summarize the following text. I am Antonio and I am a
2:10:44
developer. And in here I think we can already see the output. And there we go. The output was Antonio developer. And if
2:10:52
you actually look at the finalization step, I think that is exactly what you will find. So output.content is Antonio
2:11:00
developer. Amazing. So, we officially created our first AI background job.
2:11:09
So, now just for fun, let's try and change it up just a little bit. How
2:11:15
about we change the system prompt here? Actually, let's change the name of the agent to code agent. And let's call this
2:11:22
code agent and call code agent.run. And now we're going to say you are an
2:11:29
expert Nex.js developer. And let's go ahead and just say
2:11:34
something like you write readable maintainable
2:11:40
code. And let's go ahead and also answer you
2:11:46
write simple Nex.js snippets
2:11:52
like button component Nex.js and React
2:12:00
snippets. Okay, let's just do that and then write the following snippet like this.
2:12:08
So, this is still called hello world. That's perfectly fine. We don't have to change anything else. But let's just see
2:12:15
what we've achieved now. For example, I'm going to say uh create a button
2:12:22
component. I'm going to click invoke background job. And you can see this is a bit
2:12:28
longer running task. And let's see what it created. I'm not really sure what the output would be here, but here we have
2:12:34
it. Here's a simple and reusable button component using Nex.js. And you can see
2:12:39
how it actually writes code. import react const button with props on click
2:12:45
children type button class name. And it returns JSX button on click. It has
2:12:52
class names. It uses tailwind. It added a class name prop. It has children in the button. export the default of the
2:12:59
button. So basically a fully working button. So we are you can say halfway
2:13:06
there, right? We just made AI create a React component. So the next step that
2:13:13
we have to learn is how to make it use tools and run this code snippet it just
2:13:20
created inside a sandbox inside of a cloud environment that we can then show
2:13:27
to the user as a result. So that's what our next chapter will be about and I
2:13:34
think that in the this chapter we've done what we aimed to do. So let me just check this. We chose our AI provider and
2:13:43
we've set up in justest agent kit and we even tried a very simple AI step. Right?
2:13:50
So basically that's how you're going to write uh agent kit tools and we are then
2:13:57
only going to extend it by introducing tools. One of the tool can be terminal
2:14:04
usage. Another tool can be create files. A third tool will be read files, right?
2:14:11
That's what we're going to do. And then we're going to explore networks and routers. So we can keep the uh agent in
2:14:19
a execution loop. So it consist so it constantly creates new components until
2:14:25
its task is finished. You saw that in the intro video of this tutorial. I had
2:14:30
a lot of uh coding steps. That's by because it is in a execution loop until
2:14:37
it completes its task. So that's what the tools will be used for. We're then
2:14:42
going to have the state history a bunch of things and then finally we're going
2:14:48
to have the finalization step where it will save to the database and it will uh
2:14:54
save the URL of the sandbox so we can show that to the user. So in order to
2:15:00
advance further and create these tools and things like that, we're going to have to establish our sandbox because
2:15:07
without the sandbox, we can't work right. So that will be our next step for
2:15:13
this chapter. Uh we did a very good job. We created a very simple interface here on the front end and we are now able to
2:15:20
call AI background jobs and we are able to get some AI code right here. So later
2:15:29
on when we actually connect this to a proper network the function will say
2:15:34
coding agent right you're going to see it's very very cool amazing uh so now
2:15:40
what we have to do is we have to uh open a new branch and push to GitHub so let's
2:15:46
go ahead and open 05 AI jobs branch I'm going to go here and as you can see six
2:15:53
files changed one of them was the ingest database upgrade which is Again, I'm
2:15:58
guessing some cache for the ingest developer server. So, in here, I'm going to create a new branch and I'm going to
2:16:05
call it 05 AI jobs. I'm going to stage
2:16:10
all changes here. 05 AI jobs. And I'm going to go ahead and click commit. And
2:16:17
then I'm going to publish the branch. And if you want to, you can press yes.
2:16:24
And then this code rabbit uh free code rabbit extension will analyze all of these files. Or if you prefer, you can
2:16:32
go to uh where we are now going to open our pull request. And in here we're
2:16:38
going to have that very same review. And here we have the code rabbit
2:16:45
summary. So we added an input field allowing users to submit custom prompts for code generation. So you can see how
2:16:52
it connected all of those separate entities of ours from the front- end input to the TRPC invocation of a
2:17:00
background job to the actual content of a background job. And we now generate code snippets dynamically using an AI
2:17:07
agent specialized in Nex.js development. So in here we can see step by step we
2:17:13
can see the sequence diagram as always. You can see how it now features the new agent kit right here.
2:17:20
And in here we have some potential issues. So you can see how it cares about our TRPC value because we are uh
2:17:29
lacking any kind of validation. We're not even requiring a minimum length. So obviously it is telling us that that's
2:17:36
something we should add of course and we will later on. We're going to change our form schema entirely. So you don't have
2:17:42
to worry about that. Right now it's just for demonstration purposes. In here it's recommending using
2:17:49
constants instead of hardcoded strings and that is exactly something we will
2:17:54
do. So later on I have prepared very very large system prompts which I have
2:18:00
tested on which gave me the best results. So I will share them with you
2:18:05
and then you will paste them in your app and you will be able to use them as constants.
2:18:11
And in here it again suggests some sanit sanitization and uh some other limits on
2:18:19
the front end. Uh my apologies in the background job. I thought that this was the submit function. It is not. We will
2:18:25
take care of that as well. Uh and yeah, no need to do anything else
2:18:31
here because this will not look like this. We are going to modify it quite
2:18:37
heavily in the next few chapters when we introduce the actual agent network.
2:18:43
Great. So I'm going to go ahead and merge this pull request. So 05 AI jobs.
2:18:49
I'm not going to delete the branch simply so I have everything here. And then I'm going to go inside of my IDE
2:18:55
here and I'm going to go back inside of my main branch and I'm going to synchronize the changes like this. So
2:19:02
everything is now up to date. I'm going to select no for uh this trigger of the code rabbit extension this time simply
2:19:09
because this is a merge which we just reviewed. Right. I'm going to open the graph here just for a sanity check to
2:19:15
confirm that my last changes were 05 AI jobs and they are great. So that marks
2:19:22
the end of this chapter and in the next chapter we're going to learn how to create uh online sandbox cloud sandboxes
2:19:31
which run Nex.js JS applications which in the following chapters will be something our agents will work on and
2:19:38
create new components and run terminal commands into. Amazing job and see you
2:19:44
in the next chapter. In this chapter we are going to explore
06 E2B Sandboxes
2:19:49
E2B sandboxes. This will be the environments where our AI will generate
2:19:56
files and create a working Nex.js application. In this chapter, our
2:20:02
specific goal is to create an E2B account, learn how to use their command
2:20:07
line interface, and create a Docker file template for our Next.js project, and
2:20:13
then push that template to E2B. And then we're going to preview that Nex.js
2:20:20
application inside a sandbox. So, we're not going to make AI create any new
2:20:27
files and run any terminal commands right now. The goal for this chapter is
2:20:33
to learn more about the sandboxes, how they work, and basically to create a
2:20:38
template that we are going to use moving on to uh create working Nex.js
2:20:45
applications. So, we're going to start by creating an E2B account. You can use
2:20:51
the link in the description or the link you can see on the screen to let them know you came from this video. As you
2:20:57
can see, uh in short, E2B allows you to run AI generated code securely in your
2:21:05
application. It's an opensource runtime for executing AI generated code in
2:21:10
secure cloud sandboxes. It is made for Agentic and AI use cases. And some of
2:21:17
the uh uh some of their customers are Perplexity, Hugging Face, Manus, and
2:21:24
even Grock. So these are very very big names in AI here. And my experience with
2:21:31
E2B was nothing short of amazing, right? So they are built for AI use cases. So
2:21:41
for exact thing that we are building here, it is generative UI. This is pretty much the thing that we will be
2:21:47
building here. But they have an even deeper use case which I highly invite
2:21:53
you to explore yourself. So let's go ahead and create an account
2:21:58
and let's go in the dashboard. After you create an account, you will
2:22:03
probably be redirected to your sandboxes which looks like this. And at the moment
2:22:10
you will probably have zero sandboxes running. If you head into templates, you
2:22:16
will probably have less templates than I do. You might have three. I have five
2:22:21
templates because well, I explored E2B while I was developing this project. You
2:22:27
can see that I have this code with Antonio Nex.js thing. You don't have this. So, I have this because I tested
2:22:34
it. Same thing with this no-name template, right? You probably have desktop code interpreter and base. I
2:22:42
assume that's the things you have. You probably don't have these two. So, no worries about that. And I just want to
2:22:49
show you uh inside of your budget, you should see your credits. So, you should have $100,
2:22:56
uh, free for your new account. And as you can see, I tested E2B pretty
2:23:02
thoroughly. So, I I really really tested it all day, every day, and I barely
2:23:08
spent $9. So it is quite well optimized for tutorial making. So ensure that you
2:23:17
have that in your budget. Make sure that you have the credits. Uh and now let's
2:23:22
go ahead inside of the documentation here. And specifically let's go in the
2:23:28
CLI installation. So you can use brew or you can use npm.
2:23:33
I used npm here. And once you do that, you should be able, my apologies for
2:23:40
this, you should be able to run E2B, right? And you should see a bunch of
2:23:46
options on how you can run it and you can shut down your app, right? So basically E2B should become available
2:23:52
after you install uh either via npm or using brew. So what we have to do next
2:24:00
is we have to authenticate, right? So E2B O login uh should
2:24:07
open up. You can see that I am already logged in. So uh in here I get that
2:24:12
message. But you should get a not you probably won't get this message. Instead
2:24:17
you will get redirected to E2B page and from there you're going to have to uh
2:24:22
approve the login and then you'll be good to go. So once you've logged in uh what I would
2:24:30
suggest is try uh listing sandboxes or just try listing something just to
2:24:37
confirm that you are logged in. So I have no running sandboxes. So this is my message. I believe that if I wasn't
2:24:43
logged in I would get some kind of error here. Right? So just make sure that at least you get a message like this which
2:24:50
means okay you're logged in but you have no running u you have no running
2:24:55
sandboxes. Great. So now uh what we have to do is we have to learn how to add a
2:25:02
new template because right now you can see that inside of our E2B here
2:25:08
templates uh you probably have three of them as I said desktop code interpreter
2:25:14
and base. But what you need is a NextJS template. Now they do have their own
2:25:20
Next.js template which you can use but I don't want you to do that. I want you to learn how to create your own template.
2:25:28
So for this we're going to have to go into the second uh step. So we've created CLI and we've connected to our
2:25:35
account. Now we need to create a Docker file template. Now I have provided you
2:25:41
with a GitHub repository with two files that we are going to need for this not
2:25:46
because uh I don't want to write this with you but because we have to be very careful about writing these files right
2:25:54
so this is what I suggest we do now as always ensure that you're on your main branch you can synchronize changes just
2:26:00
in case and then go inside of your source source folder here my apologies
2:26:06
outside of source folder so completely outside create a new folder called
2:26:11
sandbox templates like this and inside create a new folder which we're going to
2:26:17
call nextjs and then in here you are going to create
2:26:22
e2b docker file like this you don't have to
2:26:28
install any extensions at least I didn't use any for this now this docker file
2:26:33
has the content that you can find in the public repository sorry that which you
2:26:38
can access by using the link in the description or the link you can see on the screen and when you're in here you
2:26:45
can access that file. So just go ahead and copy it entirely and paste it here. And now we're going to go ahead and uh
2:26:52
explain what it does. So the first thing we do is we set the environment. In our case that's going to be node. After that
2:26:59
we run a terminal command to install kernel. So we updated the system. We get
2:27:05
the install method for curl and then well whatever else we need to do here.
2:27:10
I'm not too familiar with configuring docker environments but basically in this part we configure curl. After that
2:27:18
what we do here is we copy another important file a bash script compile
2:27:25
page which we currently don't have. So let's create it. compile_page.sh.
2:27:32
Make sure to not misspell this because we need it right here. And you can find
2:27:38
the content in the same uh public repository here. I'm going to explain what this does as well. But for
2:27:45
now, just make it like this. After we copy this compile page and we
2:27:53
put it in the environment, right, in this docker environment, we run this
2:27:59
command on it to make it executable. Then we change our directory to next.js
2:28:05
app. And then inside of that next.js app, we run a command which you've
2:28:10
already seen a couple of times. Create next app. So basically the same way we started this project, we are now
2:28:18
creating a docker which is going to start the project the same way. The versions I'm using are 15.3.3
2:28:25
with chat 2.6.3. The reason I'm using these versions is
2:28:30
because when I started making this tutorial, uh those were the newest versions. You already know that now that
2:28:36
I'm recording this tutorial, there are newer versions than this. So, if you want to, you can upgrade, but I'm going
2:28:43
to stay with these versions for now simply because I know that they work for me. So, later on when we finish the
2:28:50
project, you know, feel free to upgrade this to 7.0 and this to 7.0 zero and
2:28:56
this to whatever is the newest version. But for now, I want to stick with these versions because they worked for me
2:29:01
initially. Now let's explain these flags. So why do I add d- yes after npx
2:29:07
and why do I add d- yes after create next app? The reason I'm doing that is
2:29:14
because you have to remember these commands will be running in a container in a dockerized container which means no
2:29:20
user will be able to interact with them. Remember when we started our Nex.js application, we had a bunch of
2:29:25
questions. Do you want to use tailwind? Do you want to use slint? Do you want to use this that so because of that uh I
2:29:33
have to uh just agree to all of those things so the terminal doesn't hang
2:29:39
right? So it doesn't block it can keep moving forward because if it blocks it
2:29:45
will not work. That's why we have to add both d- yes in front of npx and in front
2:29:51
of our command because npx might ask you to upgrade right so we will also agree
2:29:58
to that right whatever you ask me I agree to and same is true for running chaten in it and for adding all shatzen
2:30:07
components and then what we do is the following we move the content of that new folder
2:30:14
nextjs app where we just added Nex.js and all of its components and we move
2:30:20
that entire content into home user directory and then we remove the old
2:30:25
folder. The reason we do that is simply because it is easier for AI to
2:30:30
understand that the the place where it's located because initially it will be loaded here. We just tell it wherever
2:30:38
you are this is where you have the next.js application. You don't have to go to any other directory. Trust me,
2:30:44
that is much easier for nextj for an AI to understand because otherwise it will
2:30:50
hallucinate things. This way it's just easier to work with. So you might be wondering why did we then even open a
2:30:56
new folder if we're just going to bring all the stuff back here? Because if you
2:31:02
try to initialize this command, the dot basically means in this folder. If you
2:31:08
try to do that inside of home user, it would fail because in order to initialize a next app, it needs to be an
2:31:14
empty folder and home user has some hidden files, right? So it's never
2:31:20
really empty. That's why we needed to do this trick. So that is basically our docker file. Now let's explain the
2:31:27
compile page. So the compile page is a little trick that we are going to use to
2:31:32
ensure that the next.js JS application is running and that the root page is compiled. So basically in here we have a
2:31:40
function called ping server which uses curl which we install right here and we are attempting to ping localhost 3000
2:31:49
and we are doing an iteration of 20 uh I'm not sure not too familiar with the
2:31:55
bash shell language to tell you if this is seconds milliseconds I'm not sure but basically it's more than enough time for
2:32:02
the server to start. So it gives it 20 attempts, right, to try and get a 200
2:32:08
response. And once it does, it simply uh uh marks it as done. And then it runs
2:32:16
that method ping server and it goes inside of home user where we just said
2:32:22
that we create this project and it runs npx nextdev-
2:32:28
turboac. So the turbo pack is uh really cool here because it speeds up the uh the start of
2:32:35
the dev server. So it's actually very useful in this case. Great. So once you have these two
2:32:42
things, the second part is very important and that is that you set up
2:32:48
Docker inside of your project. So here I am on the Docker landing page.
2:32:56
You can use the link you can see on the screen to let them know you came from this video. Uh, and basically the way I
2:33:02
set up Docker in my project is by downloading Docker Desktop. I use a
2:33:08
MacBook, so I download it for Apple Silicon. If you use Windows, you choose your architecture here. Or if you use
2:33:14
Linux, uh, well, you probably know what you're doing then. So, after you've done that, make sure that you have Docker uh,
2:33:22
installed. So, in here, let me just try and open it back here. Uh since if I go inside of uh
2:33:30
let me just try and find the documentation here. Docker desktop. Let's go into overview. And in here
2:33:38
somewhere we should have setup install. And in here, there we go.
2:33:44
So in here we have some deeper documentation here. Uh on on Mac and on Linux it's pretty straightforward,
2:33:50
right? If you install it uh with a DMG, it will add it to the terminal uh as
2:33:56
well. But if you don't, here's how you can add it from terminal as well. Also, if you want to, you can use orb stack.
2:34:03
That's a Docker alternative. All right. But the reason I kind of don't know how
2:34:09
to explain how to install Docker is because I don't know if I'm talking to a person who has a Windows, who has Linux,
2:34:14
or who has Mac OS, right? So that's why I'm kind of don't want to give you too much information and I don't want to
2:34:20
tell you something incorrectly but basically try to research yourself you
2:34:25
know uh what you are using right so try and install that and your goal is
2:34:33
basically to be able to have docker available
2:34:39
right that's kind of the goal you should not get an error in docker
2:34:45
and on windows In here, you can see pretty similar instructions. Uh I'm not
2:34:51
too sure what this means. I don't use Windows. Uh but in here, I think it is
2:34:56
important for you to be able uh to run Docker from the command line as well. Uh
2:35:04
but at minimum, you should be able you you need to install the Docker desktop
2:35:10
package and you should be able to start that application at minimum. That's the minimum thing that I expect, right? So
2:35:18
now I'm going to go ahead and start my Docker application. Actually, the first thing I'm going to do is I'm going to
2:35:24
try without Docker started simply so uh we can test if uh if the command fails.
2:35:32
So I want to show you what happens if the command fails first. So let's go ahead inside of SDK reference CLI
2:35:40
template and let's do template build. So in here we have E2B template build
2:35:46
command. And the way we're going to do this is the following. Go inside of sandbox templates and go inside of
2:35:52
next.js like this. So I'm going to try and run B2B template
2:36:00
build here and I'm going to give this a name and I'm going to call it Mine next.js test. So that will be the first
2:36:08
thing I'm going to try. So in here you can see how uh it found the E2B docker
2:36:14
file and it requested build for the sandbox template ID with this name login
2:36:20
succeeded and then it attempted to run docker build and then it failed. Right?
2:36:26
So this is the error you will see if your docker is not running. So now I'm
2:36:32
going to start docker for me very simply I'm just going to open the application docker and then in here uh I will have
2:36:40
docker desktop available. You can see docker desktop is now running. So uh
2:36:46
let's see if that will be enough for me to run this and try it. So let me see.
2:36:52
E2B template build. Let's see this time. And there we go. So all I had to do was
2:36:59
install Docker Desktop and I need to make sure that I have Docker Desktop
2:37:04
running. That's the important thing for me. So you can actually stop this now
2:37:09
because it will take some time to build but it's not going to work correctly. I just wanted to show you how it looks
2:37:15
like when your Docker is not running. Basically this is the error you will get. So just make sure you have Docker
2:37:21
running. You don't even have to create any image on Docker or nothing. We are doing that now. Right? So just make sure
2:37:28
you have Docker installed on your system and make sure you open whatever application you installed. It can be
2:37:34
Orbstack, it can be Docker Desktop, right? Uh I'm not sure if you need it inside of here, right? As I'm I I keep
2:37:41
saying that because I don't know what machine you're on. I have it inside of my terminal as well. I'm not sure if
2:37:47
that matters, right? Because you can see that in here it does run the Docker
2:37:53
command. So it probably does matter the fact that I have it inside of my
2:37:59
terminal. So uh make sure that you have Docker CLI installed as well. If you
2:38:04
don't, you might even see a different error showing here. Great. But once you
2:38:09
get to this part, once you get to the fact that after Docker build is being fired, you start seeing these kinds of
2:38:15
messages, right? Something resolving, something transferring, it means the Docker is working. And then you can
2:38:22
cancel it using command C or control C. Uh and then we're going to run a proper
2:38:29
command with a proper uh start command. So now in here, here's what we have to
2:38:36
do this. Basically uh we have to add
2:38:42
E2B template build-ame Mine next.js js
2:38:50
test two dash cmd and you have to add
2:38:55
compiled_page.sh. [Music] So now uh let's go ahead and run this
2:39:04
again. So I'm just going to wait to see this succeed. There we go. And now I'm
2:39:09
going to pause until this part completes because it is a little bit long. you
2:39:14
know it needs to upgra it needs to upload the entire Nex.js project there with all the packages and everything and
2:39:21
it needs to you know install curl and all of that. So I will pause until some
2:39:26
interesting things show here so you can compare with your process as well.
2:39:33
So here's an interesting part. Uh it is running npx create next app and you can
2:39:38
see my result typescript types node types react tailwind CSS. So it is
2:39:43
obviously successfully installing this with no questions asked. That's why
2:39:48
these parts were so important because if we didn't include this uh it would be blocked by waiting for the user input,
2:39:56
right? That's why that is important. It was also successful in copying
2:40:03
compile page.sh. So we did this correctly as well.
2:40:10
Now I am running chaten in it. I'm selecting neutral color. I'm forcing
2:40:16
everything to install here. Right? So I'm just making sure that I'm not adding any prompts. And there we go. It's
2:40:22
succeeding. It uh checked the reg registry. It found app globals CSS. And
2:40:28
now it's installing all dependencies. So so far so good.
2:40:34
Now it is adding all components. You can see again very successful. It found
2:40:40
global CSS. It is upgrading it and it is installing all of those radics packages
2:40:45
which we use for our component. So it's we are basically doing the same setup we did for our project but this time inside
2:40:52
of a docker container. Great. And now it has finished that
2:40:58
part. And now it is moving the entire content from Nex.js app into home user
2:41:03
and removing the old folder. Now this is this command actually failed for me a
2:41:08
lot during the initial development of this project and the reason was actually because I was missing this d- yes
2:41:16
commands. So if this part is successful for you as it is to me right now you
2:41:21
have pretty much succeeded in doing this. So if this part fails for you it is almost certainly because uh you
2:41:29
forgot to add d- yes to some of this. Basically, it's hanging on some command
2:41:35
and it didn't create the Nex.js app. Uh, great. So, now what's happening, I think, you know, I'm I'm new to Docker
2:41:42
as well. I've briefly experienced it before, but now what's happening is obviously pushing all of that data to
2:41:49
the Docker container on the E2B app.
2:41:54
And just to confirm, in case you're wondering, this part does take a while.
2:42:01
After that part has completed, it is triggering the build. And here you can
2:42:07
track the progress of the build itself. So this is more specifically a build of
2:42:12
the docker image. We're not building the Nex.js app, right? Those are two different things. Our Nex.js uh app is
2:42:20
just a development instance. We are building the Docker image here.
2:42:27
All right. So mine uh failed. So I will uh it looks like it failed because
2:42:35
it is missing the compiled_page.sh [Music] command not found. And that's definitely
2:42:43
because of this. I should have uh done this differently. I have to find a way
2:42:48
to execute this in a different way. Something like this. I will test it out
2:42:54
so I know for sure and then I will tell you the correct command.
2:43:00
So I think that the start command should be this forward slashcompilepage.sh.
2:43:08
And let me just show you something. Uh regardless if this part fails or not. I
2:43:13
mean depending on how I edit this video, perhaps I told you not to even run this command in advance, right? But you can
2:43:20
see that I have something called e2b.tl generated in here. You can see my start
2:43:26
command is compiled_page.sh. sh. So I have two ways of changing this now. I can either change it here or I
2:43:33
can change it here. But you can see how it remembered all of these things. But for now basically this should be the
2:43:41
working command. So I'm going to pause and try it again.
2:43:47
And this time it worked. You can see that right here it is waiting for the template to be ready and then it is
2:43:54
waiting for server to start a couple of times and then finally we can see next.js 15.3
2:44:01
and that signals that it is done template is ready pausing sandbox
2:44:06
template. So be very very careful here. During my initial development of this
2:44:12
project, I was able to get to template is ready and pausing sandbox template
2:44:17
and uploading template. But I actually never saw this part. Let me just go up
2:44:22
here. It is very important that you can see this part in your terminal because this means that it's actually working.
2:44:29
If you can't see this everywhere, even with this saying it's ready, it will
2:44:36
actually not be working. So just make sure you did this correctly. And also on the second run, this runs much much
2:44:42
faster because half of the I mean the entire project is already uploaded, right? So you won't have to wait that
2:44:49
long. But basically, this was the final command E2B template build. And the cool
2:44:54
thing now is that you actually get instructions on how to use this. You can see that you can use the name or you can
2:45:01
use the ID. So I don't know what this actually tells us. Is the name unique or not? I think it might be unique per
2:45:07
team. uh which then again you know uh depends if you're going to publish this
2:45:14
or not. Uh what does publishing mean? Well, I'm going to explain in a second. But basically now you can go find your
2:45:20
E2B.l file and in here you can see all the information team ID start command
2:45:26
docker file template name template ID and from now on if you ever want to do
2:45:31
any changes to here you can just do template build. That's it. And you can just modify whatever you want from here.
2:45:38
want to change the name just change the name here and run template build. So right that the in the tommo file that's
2:45:44
basically where the configuration is now. Uh great. So before we move on now
2:45:49
let's go ahead inside of E2B inside of your project go inside of templates and refresh. And now if you have done this
2:45:57
correctly you should see Mine next.js test dash2 right here. And you can see
2:46:04
that this says private. So just to make things easier for now, I want you to do
2:46:09
the following. I want you to copy the ID of Mine next.js test 2 and I want you to
2:46:16
go and go to E2B template publish here.
2:46:21
And let's go ahead and do the following. So actually we need the team ID. My apologies. So just go ahead and find I
2:46:29
think it's inside of your team here. Find the team ID and copy it. And inside
2:46:34
of here. So you are inside of this uh Nex.js template. So you can just do E2B
2:46:39
template publish D and then paste the ID of the team and this will make the
2:46:45
template public to everyone outside of your team. The reason you're doing this is simply because uh it will be easier
2:46:51
to connect to it. At least that was my experience. Later on we can easily unpublish it or you can delete it. The
2:46:58
reason this is kind of uh you know you should be wary of this. You should not share your uh template ID with anyone
2:47:05
because I can use it and I can uh use your credits, right? I can spend your
2:47:11
budget here. So, be careful. Make sure that only you know about this and later
2:47:16
I will make sure to find a way to unpublish this so that only you and your team can use this. Great. So now what
2:47:24
should happen is inside of your templates when you hit refresh and find that Mine nextjs test 2 it should say
2:47:32
public under visibility and that basically means you did it. This is now working. So now what we have to do is
2:47:40
the last part of this chapter. We did this we did this and we even did this.
2:47:45
It's time to actually start this sandbox. Right. Let's see if that next.js JS app is actually working or
2:47:53
not. And lucky for us, this is quite easy to do. So, what we're going to do
2:47:58
now is we're going to go inside of source, inside of ingest, and inside of
2:48:03
functions here. Uh, and I think I completely forgot, but yeah, we have to
2:48:09
uh we have to install uh E2B. I think I forgot that entirely.
2:48:15
So let's add E2B code interpreter to our project. And make sure you go in the
2:48:21
root of your app like this. And I'm going to show you the version of this package now.
2:48:27
So let's go inside of package.json quickly. So it is 1.5.1.
2:48:34
That's my version. Now let's go inside of our functions here and let's import
2:48:41
sandbox from E2B code interpreter package which we just installed. And then what we're going to do is the
2:48:48
following. Let's go ahead and before we create an agent, let's do const sandbox
2:48:54
ID await step.r run. And we can extract the step from here. We removed it in the
2:49:00
previous chapter I believe. So step.run run get sandbox ID. That will be the
2:49:05
first step we're going to run. And in here, we're going to attempt to
2:49:10
get the sandbox by doing await sandbox.create.
2:49:16
And inside of here, you will simply pass the template ID. So in your case, this will be Mine next.js test 2. Now, you
2:49:25
will probably have a different name for this because I think if they allow public templates, there probably has to
2:49:31
be some kind of originality here, I guess. So, once you've created that, go
2:49:37
ahead and simply do await sandbox set timeout. Uh, actually, you don't have to
2:49:42
change the timeout. I'm going to explain what the timeout is in a second, but for now, let's just do sandbox.box ID. So
2:49:50
this will be the step which we are actually going to preserve here and keep throughout uh this entire project
2:49:55
because we will always need the sandbox ID. And now that we have the sandbox ID,
2:50:01
uh what we have to do is we have to create a sandbox URL. So after the agent
2:50:07
finishes, let's pretend that this agent now actually connected to this sandbox and then added a bunch of files. Then
2:50:14
what we would do is we would generate the sandbox URL using await step.r run
2:50:20
get sandbox URL. In here we would get the sandbox again
2:50:26
using await. And then in here uh we need to create a util called get sandbox. So
2:50:33
let me just go ahead inside of the ingest and create utils. DS and export
2:50:38
asynchronous function get sandbox which accepts sandbox ID which is a type
2:50:44
of string. Let's get the sandbox using await
2:50:50
sandbox from E2B code interpreter.connect sandbox id like this and then in here
2:51:00
just return sandbox. So basically I'm writing a function to make this uh
2:51:06
reusable. You're going to see why later. And also let's import this like so. So the structure now that you have get
2:51:13
sandbox you can do await get sandbox here and pass in uh the sandbox id and
2:51:20
then return sandbox.get host
2:51:25
3000. So, uh, basically what this is, it
2:51:31
creates the host under the port 3000. Why 3000? Well, we know why. Because of
2:51:37
our uh, sandbox template, right inside of here, we know it's running on port
2:51:43
3000. That's the only port it can run on. It's a Nex.js app. And this is
2:51:48
actually only the host. So, let's do con host to be that. and then return open back
2:51:57
https and then post like this and then in here
2:52:05
sandbox URL like this. Are you ready to try this out now? Make sure you have
2:52:12
imported the get sandbox right. So let's go ahead and do it. npm rundev in one
2:52:18
npx ingest cli dev in the other. It is
2:52:23
running perfect. Let's go to localhost 3000. Make sure you have your ines development server here. And I'm just
2:52:29
going to do uh create a button component again. Why not?
2:52:36
And let's go ahead and see what's going on here. Oh, so there we go. It is
2:52:41
failing. So something uh you can see the error. Invalid API key. So we can cancel
2:52:46
this run because I forgot to add the API key. Uh I'm constantly not reading this
2:52:53
the way I should. So let me just go ahead uh and add click on API key here.
2:53:00
Uh and we can find it at the dashboard. So let's go back inside of our dashboard here. Uh you can see I already have
2:53:07
some. So I'm going to click create new key here. And you can find it here under API keys. So create new key Mine dev.
2:53:15
And I'm going to click create key here. I'm going to copy that key. And let's go inside of environment here. E2B and
2:53:24
let's add it. So it's going to be E2B
2:53:30
API key like that. And if you add it like this,
2:53:36
I don't think you have to explicitly add it anywhere because this is what it will be looking for. So, uh I'm not sure if I
2:53:45
can find the documentation for this specifically, but I think that now it will be working.
2:53:50
Let's try again. Invoke another background job. And let's see, do we get any errors or do we successfully get a
2:54:00
running template? We're going to see get sandbox ID has succeeded. And now it's doing the coding agent thing. It's
2:54:06
generating some code and now it's grabbing the sandbox URL. And in the finalization here, you should see the
2:54:12
output of an AI who created a component and you should see an actual URL. Let's
2:54:19
try and visit this URL. Fingers crossed. And we should now see a Nex.js
2:54:25
application. And we are a completely empty Nex.js application hosted in E2B
2:54:32
started from our background job. You are halfway there. you can already uh kind
2:54:39
of tell what the next steps are. We are going to dive deeper into E2B sandbox
2:54:46
API now and we're going to learn how to run terminal commands, how to create files, how to read files, basically how
2:54:54
to translate what it's now doing here very simply as an output into actually
2:55:00
modifying the code in this sandbox. Amazing, amazing job. I know this
2:55:05
chapter wasn't too easy. a lot of new things, Docker, Docker files, all of those things. But if you've come this
2:55:11
far, you did it. Amazing, amazing job. So, let's go ahead and mark this as
2:55:17
complete. And yes, this uh will stop working after some time and that's
2:55:23
completely normal. So, after about 5 minutes, I think by default, uh this link will show an error, right? So,
2:55:30
that's normal. Don't worry, we can change the timeout later. So now let's go ahead uh and let's merge
2:55:37
this. So I'm going to go ahead and I'm going to open my source control
2:55:43
here. I'm going to go ahead and create a new branch 06 E2B sandbox. Let me just confirm
2:55:51
that's my chapter name. So sandboxes. I'm going to go ahead and stage all of
2:55:57
my changes including the Docker files of course. And I'm going to do 06 E2B
2:56:05
sandboxes here. And I'm going to commit. And I'm going to publish my branch. Again, there is a free code rabbit
2:56:12
extension you can use if you want to review your changes and learn about all the things you can do differently in
2:56:19
your code. So if you want to, you can click review all changes. Or if you're like me and you like to see uh the
2:56:27
summary and all other things, you can use their pull request function. So now I'm opening my new pull request here
2:56:33
which I will merge. So let's go ahead and review it.
2:56:38
And here we have the code summary. So what I'm very impressed with is how well
2:56:43
Code Rabbit understands what we just did. So we introduced a sandbox environment for Nex.js allowing users to
2:56:51
create and access isolated Nex.js instances. We added functionality to
2:56:56
generate and return a unique URL for accessing sandbox next.js app. So quite
2:57:02
impressive that it understood the entire context of this pull request with nothing more than files. Very very very
2:57:10
nice. So in here we even have an entire sequence diagram demonstrating how that
2:57:15
happens. So once the user triggers a hello world background job, we go ahead and create a new sandbox with our
2:57:22
template name. After that, we return the sandbox ID and we have it for that session of that background job. We then
2:57:29
use our new package E2B code interpreter to return a sandbox instance and from it
2:57:34
we extract the sandbox URL. Amazing. And you can see how it even has some related
2:57:41
pull requests. It detected where we initially added hello world. So if you were working in a team, if this was some
2:57:48
big operation, you can now link pull requests automatically with this extension. Amazing. So in here, it has
2:57:55
some potential issues regarding our TOML file, but that doesn't matter because this file is not generated by us in the
2:58:02
first place. So it is okay for it to be like this. In here, it is suggesting improving the compile page shell script,
2:58:10
which could be completely valid. I'm don't know bash. I'm I'm also mixing bash and shell. I'm not even sure what
2:58:17
is the correct name. So for all I know, this could be completely correct.
2:58:24
But since I want to be very careful about this part, you know, I'm not going
2:58:29
to change it because I know it works, right? So good enough for me at the moment. Uh great. Uh so in here it
2:58:38
recommends adding some try catch all of the things which we will add later but
2:58:43
in a different syntax because we will implement the agent network and the agent retrying and it's going to work in
2:58:48
a different way. It's going to be using tools. So overall pretty good summary pretty good review. Let's go ahead and
2:58:54
merge this now. As always I'm not going to delete my branch simply so I have access to all of my progress here.
2:59:02
Amazing amazing job. So, as always, go back to your IDE here and change to main
2:59:08
branch and then click on synchronize changes. And as a final sanity check,
2:59:13
you can go ahead inside of source control inside of graph and you will see 06 E2B sandboxes have just been merged.
2:59:22
Amazing, amazing job. I believe that marks the end of this chapter and see you in the next chapter where we are
2:59:28
going to learn how to make our AI use tools such as terminal to install some things and actually modify these
2:59:36
sandboxes. Amazing amazing job.
07 Agent Tools
2:59:41
In this chapter, we're going to add tools to our AI.
2:59:46
The tools we are going to add are going to be the terminal tool which will allow the agent to run commands, create or
2:59:54
update files tool, which as its name says will allow the agent to create or
3:00:00
update any files within its environment. And finally, we're going to have read
3:00:05
files, which will be able to read files. We are then going to add a completely
3:00:10
new prompt for our agent. And we are then going to implement the agent network and the routers. So we are going
3:00:19
to heavily rely on agent kit by ingest. You can use the link you can see on the
3:00:24
screen or the link in the description to let them know you came from this video. So in here what we are going to do is we
3:00:32
are going to uh add some tools. Tools are used to extend the functionality of
3:00:37
agents for structured output or for performing tasks. So for example, they
3:00:44
are used to call code enabling models to interact with systems like your own database or external APIs like B2B. So
3:00:54
let's go ahead and let's create a very simple tool which will be allow our
3:00:59
agent to interact with the terminal. So the first thing we're going to do is
3:01:05
ensure we're on the main branch and we are going to synchronize our changes and just confirm your last merge was E2B
3:01:11
sandboxes. After that let's go inside of source inest functions.
3:01:19
Now in here we're going to do the following. After you create the coding
3:01:24
agent uh go ahead and do the following. Right after your model, add tools.
3:01:32
Open this array and let's create tool which you can import from ages uh a
3:01:39
inest agent kit. In here, let's go ahead and give this tool a name. It will be called terminal.
3:01:48
Add a description. Use the terminal to run commands
3:01:54
and add the parameters which the AI will pass to this tool. It will be a very
3:02:01
simple command which is a type of string. And after you have added the
3:02:06
parameters and the handler method, extract the command from the first
3:02:13
argument and extract the step from the second argument.
3:02:19
In here you are going to return the step execution
3:02:24
await step question markr run. The reason we need to use question mark is
3:02:31
because step can be undefined. So let's go ahead and run a step called terminal.
3:02:38
It's going to be an asynchronous method inside of this step. And the first thing we're going to do is we are going to
3:02:44
create an object called buffers. Inside of here, we are going to set std
3:02:51
out to be an empty string and std error to be an empty string as well. Now,
3:02:58
let's open a try and catch method. Instead of the try, let's grab our uh
3:03:04
let's get our sandbox here using await get sandbox
3:03:10
and pass in the sandbox ID. Then let's grab the result of await
3:03:16
sandboxcomands. And pass in the command. So we are
3:03:23
reusing our get sandbox method from utils. I also imported zod. So make sure
3:03:28
you add this as well. Uh and we are basically doing the same thing we're doing right here. We are
3:03:35
establishing the connection with our sandbox using this simple util here. So we don't have to repeat this every time.
3:03:42
And now what we are doing is we are running a command. So you can learn more about this uh by going inside of the E2B
3:03:49
documentation and simply learning about the command. Let me see if I can find
3:03:55
that here. Here we have the commands. So this is how you basically run commands in your environment. Perfect. So now
3:04:03
let's go ahead uh and define some more settings here. So after we run the
3:04:10
command, let's define on std out grab the data which is a type of string
3:04:17
and for buffers std out simply
3:04:22
add that data and the same thing on std error. So data is a type of string
3:04:30
and in here simply add buffers std error
3:04:36
plus equals data. So we are handling all of the results of running the terminal
3:04:41
commands in this object. So we're going to know if the terminal command succeeds or if it fails. That's why it's
3:04:47
important to keep track of the result. And then let's go ahead and let's return
3:04:53
result std out. And then in the catch method, let's extract the error here.
3:05:00
First, let's do console. Simply so we see this in the terminal. Open back. And
3:05:06
you're going to say command failed render the error. And then you can use
3:05:12
forward slashn to break into new line so it's more readable. std out will be
3:05:18
buffers std out. And then go ahead and break line again.
3:05:26
std error will be buffers std error. So that's going to be the console
3:05:34
log. And then you're going to return the exact same thing.
3:05:39
This will basically tell the agent what went wrong with additional information about std out and std error. So yes,
3:05:47
just make sure that you don't accidentally type this incorrectly as it is important for AI to understand what's
3:05:55
going on. And that is our first tool. Our agent now has the ability to use the
3:06:02
terminal. It uses sandbox API for this and it will keep the results of this uh
3:06:11
terminal execution. So either a success message or an error with detailed information about what happened because
3:06:18
commands can fail and thanks to ingest they will automatically retry but now
3:06:24
with the context of what happened. So if you're building nex.js with me for some
3:06:29
time you know that sometimes when we install a package which doesn't support next uh react 19 it fails because we
3:06:37
need to add d-leacy pure depths. So if that happens here it will first fail and
3:06:44
then the AI will read the message and say oh okay I need to add d- legacy peer
3:06:50
demps and ingest will automatically retry the terminal step with that new
3:06:56
information and then it will succeed. So that's how powerful injest background jobs are and now they're amazing inest
3:07:04
uh agent kit. So now that we have finished uh the
3:07:11
terminal tool, let's go ahead and create a new tool.
3:07:18
This one will be called create or update files.
3:07:24
The description will be and let me just see. I think I'm doing something. Yes, I'm doing something incorrect here.
3:07:33
I think it needs to be here and add a comma here. There we go. So yes, so just make sure you're doing it at the end of
3:07:40
this create tool bracket right here. The description will be create or update
3:07:47
files in the sandbox. Let's go ahead and let's add the parameters. It's going to be an object
3:07:54
of items and it will accept the files. files are going to be an array of
3:08:01
objects and inside we're going to have path which is a type of string and content
3:08:09
which is a type of string as well and it's going to be the only thing we
3:08:16
will accept. So now we can build our handler method inside of this handler method. Let's go
3:08:22
ahead and let's extract a few things. The first things will be the files
3:08:28
and the second thing will be step and network.
3:08:34
And now in here let's go ahead and let's get the new files by doing await step
3:08:39
question mark run create or update files.
3:08:45
Open the asynchronous method here. And let's go ahead and open a try and catch
3:08:50
block. Let me just add catch here. There we go.
3:08:56
Instead of try, let's create updated files by first looking at network.state.data.files
3:09:05
or an empty array. Then let's get the sandbox here. Await
3:09:11
get sandbox and pass in the sandbox ID. And now for const file of files
3:09:21
await sandbox files write file.path
3:09:27
file.content updated files file.path is now
3:09:33
file.content. So basically when the agent gets access
3:09:40
to create or update files tool, it will give us a structured input of files it
3:09:46
just created. So imagine this first part which we already have. We've already
3:09:52
seen it create a a few files I think. There we go. So here's a simple button component and then it just returns jsx.
3:10:00
So now it will do exactly that but it will recognize the input this accepts uh
3:10:06
accepts. So what it's going to do is it's going to return back an object.
3:10:12
Let me try like this. It's going to return an object like this and it will have app psx
3:10:20
and then in here it will be you know paragraph app page. This is how it's
3:10:26
going to look like. And then the same thing for any new components. Right?
3:10:31
This is what it's doing now. And then we're going to iterate over each of that and we're going to write that to the
3:10:38
sandbox file explorer using files.right which is the similar API like sandbox
3:10:44
commands. So that's how we know which file to write where. And then we just keep a
3:10:51
track of updated files internally in our network state simply so we can later
3:10:56
tell the user which files were changed because technically we could just ask it
3:11:02
in the prompt hey you know when you finish also tell me which file you changed but you can't really rely on
3:11:08
that because AI has a token limit it can only talk for so much but for this part
3:11:14
you can rely on this right so each file it actually writes in the sandbox box in the file explorer. We are going to save
3:11:22
it. We are going to keep track of it. And the reason we are choosing the format of an object rather than an array
3:11:27
is because this way it is very easy to to overwrite any files if they change by invoking this step again because this
3:11:34
step can be called 50 times for all we know. That's why we are choosing an object rather than an array. So we can
3:11:42
just simply overwrite any path if it changes. And then let's go ahead and do return
3:11:48
updated files. And then in the error here, let's return error and simply render the
3:11:58
error. Perfect. And then uh outside of
3:12:04
this if type of new files is equal to object
3:12:11
network state data files will be new files.
3:12:16
So why are we waiting for this to be an object? So the new files are basically the return of this step. This step can
3:12:23
either be an object or it can be a string. So we are basically waiting for
3:12:28
it to be an object and only then do we store it into our internal network state. Perfect. So that's another tool
3:12:35
finished. Now let's go ahead and let's create another tool with a name read
3:12:41
files. Now in here let's add a description read files from the sandbox.
3:12:50
parameters Z dot object files Z dot array and Z dot string inside.
3:12:58
Now let's go ahead and let's add a handler method again an asynchronous method
3:13:04
and in here we are going to return await step and we just need to extract the
3:13:11
step from here. So let's do that. First extract the files from here and then extract the step from the second step.
3:13:18
Be mindful if you forget to do this. You won't get an error simply because we have a step defined elsewhere.
3:13:26
We have it here. So be careful. You always have to extract the step from
3:13:32
the tool because it holds different context. So step.run
3:13:40
read files asynchronous. And in here open a try and catch block.
3:13:48
In the try block, connect to the sandbox. Await get sandbox sandbox ID.
3:13:57
In here, open the contents array. And for const file of files,
3:14:05
push to that contents array. So const individual content is await sandbox
3:14:11
files read file. So we read the file and then we simply push the path to be file
3:14:21
and the content next to it. So in here it doesn't really matter how we store
3:14:27
this data because this is not for us. This is for the AI if they if it needs
3:14:33
to read data. So yeah let's just fix this path. So if we in our prompt
3:14:40
instruct the the the AI agent to read before they do something, they're going
3:14:46
to use this. Why would they need to read something? Well, so they don't hallucinate, right? So we tell it if you
3:14:53
attempt to use a chat component, make sure to read inside of the components
3:14:58
folder. So then it's going to use this tool to attempt to read a file. And if it doesn't exist, it's going to say,
3:15:04
"Oh, okay. then I need to create it or I need to use something else. It's basically not going to hallucinate or
3:15:10
assume a tool exists. That's why this step is quite useful and also why we
3:15:15
don't really care about the format too much because AI can read from various formats here. And if this fails, we
3:15:22
return an error like this.
3:15:28
And that is the last tool that we need. What we have to do next is we have to update our prompt and tell it that it
3:15:35
can use these tools. I have prepared a prompt for you in my
3:15:43
public GitHub of assets. You can use the link you can see on the screen or the link in the description to access it.
3:15:49
Now be mindful of something. I am not a prompt engineer. I have no idea if this
3:15:55
is a good prompt or a bad prompt. I have generated it using AI itself. So I
3:16:01
assume it's okay. I have found it to work quite well for my use case. But you
3:16:08
are free to modify it however you want it. I I started out very simple like it was almost just like one or two lines.
3:16:15
And then I had to addit more and more and more instructions until it understood things very well. And I found
3:16:22
this to be kind of a very very good uh at least starting point if nothing more.
3:16:28
Right? But the cool thing about this project is your app can get twice as
3:16:35
good just by adding a new model. So if OpenAI or Enthropic release a new model,
3:16:43
all you have to do is use that new model and your app is suddenly twice as good.
3:16:48
So that's the cool part about working with AI, right? So copy this prompt from
3:16:53
my assets. Let's go inside of source and let's create prompt.ts and let's paste it here. So I'm going to slightly go
3:17:00
over it just so you understand what I'm doing here. So you're a senior engineer working in a sandboxed Nex.js 15.3
3:17:08
environment. Why that environment? Well, because that's what we define here.
3:17:14
So I'm telling it exactly where it is running. And then I tell it some tools. You can write files with create or
3:17:22
update files. You can execute commands via terminal. I also tell it to use d-
3:17:27
yes simply because uh it's not a human. So it uh basically we we must not get it
3:17:35
in a position where the terminal waits for human input. Then I tell it you can read files with read files. So those are
3:17:42
the first three instructions that I give it. I then tell it you know some general rules. Don't install package JSON or log
3:17:48
files directly. You can install packages but don't modify the these directly. I
3:17:53
tell it the main file is in the app folder page.tsx. I tell it that all chats components are pre-installed and
3:18:00
imported here. And then I tell it some general rules like you must never add use client to layout. This must always
3:18:08
remain a server component. Uh I tell it to never create any CSS or SCSS files.
3:18:14
styling must be done strictly with Tailwind and basically some rules like that. So you can of course tweak this if
3:18:22
you think you you can modify it a little bit. Of course maybe I will modify it during this tutorial but basically it's
3:18:29
just a bunch of rules that I have added after I experienced it fail. So after I saw that it does something incorrectly I
3:18:36
added a new rule for that. And this is important the final output. So after it's fully completed, I instruct it to
3:18:44
return this type of format task summary and inside uh a description of what it
3:18:50
just did. So it needs to return with this and you're going to see why in a
3:18:56
second. This is super important and this is why I'm very strict about it because this is the only way to terminate the
3:19:03
task. If it omits or alters this section, the task will be considered incomplete and it will continue
3:19:09
unnecessarily. So now that we have our new prompt, let's go inside of inest functions.ts
3:19:17
and let's go ahead and change our code agent here and let's extract the open AI
3:19:23
here a little bit. And now what we are going to do is we're going to change
3:19:29
this model to be GPT4.1. Default parameters here will be
3:19:34
temperature 0.1. Now if you're using uh something that is not open AI, this
3:19:40
might not exist and that's completely okay. You don't have to modify this. What temperature means is randomness. So
3:19:47
the larger the number here, the more random is something going to be. And when it comes to generative UI, I kind
3:19:54
of want it to be deterministic and reliable rather than completely random. But I give it a little little little
3:20:01
chance of randomness. So if you're using grock or anthropic, you don't have this
3:20:06
probably. So that's that's that's completely okay, right? You can even do without this in open AI. And the reason
3:20:13
I changed the model is because 4.1 is much much much better at generating UI
3:20:19
than 40. And for Antropic, the better model is 3.5 set.
3:20:26
For Grock or Gemini, I simply don't know. And as I said with Gemini, I have problems running these tools. You can
3:20:32
try, but for me, I just got errors. So now, let's go ahead and modify the system here to use our prompt
3:20:40
constant from at prompt, which we just added. So just make sure it's this one.
3:20:46
Perfect. Now, let's go ahead and let's add a slight description here. An expert
3:20:52
coding agent. There we go. So, I'm just going to bring
3:21:00
back this temperature 0.1. If you're using Open AI, you can add this. So,
3:21:06
both you and I will get similar results. I hope. Great. Now that we have these
3:21:11
tools, we are still not ready to try them out just yet because what we have to do now is we have to add life cycle
3:21:19
here. So after the array of tools ends, so make sure that you find where the
3:21:26
tools end, right? Go to the bottom here.
3:21:31
We're going to add life cycle. And in here, we're going to get on response.
3:21:39
And from here, we're going to get the result and network. And now what we're going to do here is
3:21:47
we are going to check if the last message that is in this cycle because
3:21:52
this is a cycle right this is not going to be linear. It's not going to go uh
3:21:58
using the terminal then create or update files and then read the files and we're
3:22:03
done. No, it has access to all three tools equally and it will create its own
3:22:10
plan. It might use them 50 times in a row. That's why in the prompt we tell it
3:22:15
when you are finished when you know that you're done go ahead and return the task
3:22:21
summary. So now in the life cycle we are going to uh extract the last message
3:22:27
from the assistant and we are going to check if that message includes the task
3:22:32
summary. If it does, we will break the cycle and then we can go ahead and do
3:22:39
these steps where it actually shows to the user what it generated.
3:22:44
So in order to implement that part, we have to go inside of utils here in the inest where we have get sandbox. Let's
3:22:51
export function here last assistant text message content.
3:22:59
It will accept a result which is a type of agent result from inest agent kit.
3:23:06
Let's go ahead and do const last assistant text message index which will be
3:23:13
resultput find the last index. Extract the message and we are going to
3:23:20
find the index of a message whose role is assistant. So we know okay this is
3:23:27
what assistant said last. Then let's extract the actual message content from
3:23:32
that index. So result dot output last message index
3:23:39
as a type of either text message again from ing inest agent
3:23:46
kit or unde so it can even not exist. Right? And
3:23:54
then let's return message question mark.content. And we're going to add a turnary below
3:24:00
it. If type of message.content is string, we're going to simply render
3:24:08
message.content. Otherwise, we will do message.content
3:24:14
domap. Get the individual inner content and simply return that inner contents
3:24:22
text. And then we're going to join it all in a single string. And then finish
3:24:27
the outer turnary by adding or undefined here. Like that.
3:24:34
Perfect. I'm going to pause the screen just so you can double check your code.
3:24:39
Now let's go ahead here and let's use that inside of here. So I'm going to do
3:24:45
const last assistant text. just this last assistant. Uh let's
3:24:54
do message text and in here we're going to call our last
3:25:00
assistant text message content which we can import from the utils and
3:25:06
pass in the result like this. And let me just see if I did something
3:25:13
incorrectly here. So uh life cycle on response
3:25:18
uh I have to end this here. There we go. Perfect. And then we're going to check
3:25:24
if last assistant message text and if we have network
3:25:31
if last assistant message text doinccludes
3:25:37
task summary
3:25:43
add to the network state in the summary key last assistant message text like
3:25:51
this and then outside of this outer if clause return result
3:25:59
and let me just see what I did incorrectly here. So I think I have to end this
3:26:05
maybe like that. Let me just try and fix this quickly.
3:26:11
So let's see. I think I don't need this part. Do I need this? Okay, so that was the extra. Perfect.
3:26:21
So basically what we're doing here is we're extracting last assistant message text using our util last assistant text
3:26:28
message content which simply finds the index of the last message whose role was assistant and then if it is type of text
3:26:35
message and if it's string it just returns that content. But there is obviously a special type of message
3:26:41
where it can be an array of strings. So in that case we simply join that into a single string using a very simple
3:26:47
method. And then once we parse that message, if we have network available
3:26:54
and if we have last assistant message text and if that message includes task
3:27:00
summary, which is our rule here, right, to return that if it's done, we store
3:27:06
the network state data summary last assistant message text and we return the
3:27:13
result. And what we will be able to do now is the following. Go below this entire coding agent and create a
3:27:20
network. The network will be create network
3:27:26
from inest agent kit like this. And in here
3:27:33
go ahead and add the following. The name coding agent network
3:27:40
agents will be our coding agent or whatever we called it. it we called it
3:27:46
code agent. So let's just add it here. Code agent max iteration
3:27:54
will be 15. Now this will basically
3:28:00
this is a number that will uh limit how many loops the agent can do. So what is
3:28:07
a loop? As I explained previously, the agent can pretty much do things
3:28:13
indefinitely if it wants to, right? We need to find a way to tell it to stop.
3:28:18
So, we are doing that currently using the task summary, right? But there has to be some kind of limit. We cannot
3:28:25
really let it go forever. So, I'm going to say if you reach 15 iterations,
3:28:31
you're doing something wrong. you should have already been done and this is too much and I have to stop you because you
3:28:37
will use all of my open AI credits. That's what max iterations is.
3:28:44
Now let's add a router here which is an asynchronous method and it can extract
3:28:50
network. Let's add the summary here to be network
3:28:58
data summary. And if we have the summary, we are going to break this
3:29:03
network. Otherwise, we are going to return uh the agent and the agent will
3:29:11
be code agent like this. There we go. So this is how we break the loop. If we
3:29:19
detect this summary in the network state, we break the network. Otherwise,
3:29:24
we return code agent, right? So the code agent will call itself many times until
3:29:31
finally we detect there's a summary. If we detect a summary, we say great, you
3:29:36
are done. Perfect. So now I have a bunch of these errors that I have to fix. So
3:29:42
I'm going to go ahead and just see did I maybe remove an important bracket or
3:29:47
something? Uh because something seems to be wrong here. I'm going to start by trying to reload my window just to see
3:29:54
if that maybe fixes it. Looks like it did not fix it. So, I'm going to go ahead and see uh exactly what I did
3:30:01
wrong. Okay, I think I found it. It's all the
3:30:07
way uh up here. Uh somehow this happened. I'm not sure how. So, create
3:30:14
network. There we go.
3:30:20
Perfect. And now the only error in our app is this unused network variable. Everything else seems to be working. No
3:30:27
errors seem to be flying around. Perfect. So once I have this network, what I can now do is I can run this
3:30:34
network instead of running the actual code agent. So I will remove this now
3:30:40
and I will do con result that comes from the entire network.
3:30:46
And I will simply pass in event data and I believe it was value that we pass. So
3:30:52
let's go ahead and do that. And then in here what we are able to do is this part
3:30:57
can stay the same. And in the result part uh we can actually do the following. We can show each file that
3:31:05
was changed. So next to sandbox URL
3:31:11
let's do it like this. So URL is sandbox URL.
3:31:18
The title will be for now just a fragment. files will be result state
3:31:25
data files and summary will be result state data
3:31:32
summary. So right now these are a type of any depending on the version you use
3:31:37
maybe they will even become errors. Don't worry we will add the types later.
3:31:42
So if we've done this correctly, we should have working code now. Especially
3:31:49
after you change this and if you add this prompt, I believe this should be working. Now keep in mind uh it is hard
3:31:57
to be reliable and deterministic with AI agents. I might get one result and you
3:32:02
might get a completely different result and that will actually quadruple if
3:32:07
you're using a different AI model than me. So again, the my biggest advice is use
3:32:16
the same model I'm using, use the same open AI, you even put the same
3:32:21
temperature. This will make it much more easier for you uh to have the same
3:32:26
result as me. Let's try it out now. So, uh, I have my app running here and I'm
3:32:35
going to go inside of here and I will create, um, create a calculator
3:32:42
app. Let's try this and let's invoke a background job. Let's see. Maybe it
3:32:47
fails immediately. Maybe it works. We're going to see. Uh, let me refresh the runs. Are they working? Are they not
3:32:54
working? Not sure. Okay, it seems
3:33:00
it seems like there is some kind of error happening here. So, let me just try and debug this.
3:33:09
All right. So, what I did is I've shut down the npx inest cli. I have shut down
3:33:15
npm rundev and I restarted both of them. So, do that. Shut them down and restart
3:33:20
them and let's see what's going on. So, I managed to get the sandbox ID. That's
3:33:26
a good start. It means we successfully started the sandbox. And now we are running the code agent. And you can see
3:33:32
here we are running it with all the tools available. The tools to use the terminal, the tools to create or update
3:33:39
files, the tool to read files. And now it will
3:33:44
use those tools. So there we go. It used create or update files. Let's see what
3:33:49
it created. It created calculator.tsx tsx and then it imported that calculator
3:33:55
from that file. At least that's what it says it did. And it returned back the
3:34:00
code sandbox URL. Let's check it out. I'm going to click here. And if it
3:34:06
worked, we should now be seeing a simple calculator app. Fingers crossed. And
3:34:12
looks like something went wrong. So what happened here? What happened is that it
3:34:18
forgot to use use state. But here's the cool part for you. Maybe this doesn't
3:34:24
didn't even happen. I don't know, right? Uh it can behave randomly. So, how do we
3:34:32
fix this thing? Well, we can fix it in two ways. We can fix it by uh making the
3:34:37
prompt even more strict, right? We can find the places where I add, for
3:34:43
example, in here I added you must never add use client to layout tsx line 13.
3:34:50
Maybe it's confused because of this. It reads this part and then it gets confused.
3:34:56
Let's remove that part. Let's search for use client again. File
3:35:02
safety rules again. Never add use client to app layout tsx. Maybe it gets
3:35:08
confused by this. So I'm going to remove this where it says never add use client
3:35:13
because it seems like u it is avoiding to add use client in that case.
3:35:20
I have another instance of use client here where it says if building a form or or interactive element include proper
3:35:26
state handling and add use client to the top. Perfect. That's a good example. Only add use client at the top of files
3:35:33
that was react hooks or browser APIs. Never add it to layout tsx. So I will
3:35:38
remove this part as well simply because I feel like it is leading it away from
3:35:44
using use client properly. So let's see if our next iteration will
3:35:50
be better. So I will add it again. Create a calculator app. Uh and if it
3:35:56
doesn't work then we can instruct it in this prompt further. Right? And as I said for you maybe it worked first try.
3:36:03
I don't know. That's kind of the part about building this type of apps. Um you
3:36:08
have to simply rely on luck sometimes right? Sometimes the agent will perform very well, sometimes it will perform
3:36:15
very bad. And the better this models get, the better your results will
3:36:21
actually be. And as I said, uh your prompts will also get better with time.
3:36:27
Right? So let's go ahead and see if this was any better. Let's see if it added
3:36:34
use client this time. And there we go. I have a working calculator app generated
3:36:42
by AI. Can you believe that AI has generated this? Now, as I said, I have
3:36:50
no idea what kind of result you are going to get, right? I don't think you will get the same result as me. Your
3:36:57
might have some colors. Your might not work again. If it doesn't work again,
3:37:02
you know, you can try and go inside of here and then explicitly tell it, you know, uh, be mindful of use client where
3:37:11
it needs to be added, right? You can tell it that and then it definitely won't make that mistake
3:37:18
or, you know, uh, read through my prompt and see if there's something you don't
3:37:23
like here. Or maybe paste my entire prompt inside of chat GPT and tell it to
3:37:28
improve it somehow. So for me, I removed those couple of lines for use client.
3:37:37
Perfect. Uh let's try build a landing page.
3:37:43
So you can now pretty much you know you're pretty much let's say finished when it comes to backend side. You can
3:37:50
now only improve these tools and improve the prompts. So what we're going to do next is we're going to implement saving
3:37:57
this to the database and we're going to implement creating a summary of what it just created. So we can save that to the
3:38:04
database and kind of return a message back to the user. And if you want to uh
3:38:09
you can instruct it to use some package like use drag and drop use framer and
3:38:15
then you will see it use the terminal tool. So let's see if it managed to create a landing page. There we go. And
3:38:22
may I say a pretty good landing page, right? Very impressive. Perhaps you
3:38:28
should try with the landing page example because it doesn't use any use client or things like that. I'm very very
3:38:36
impressed by this is better than I expected. So let's try telling it to use framework this time. Build a landing
3:38:42
page. Use motion package. Let's try this.
3:38:49
So in here we can see that now it is using terminal and we can see the result
3:38:54
added three packages right. So let's see if it actually used uh that or something
3:39:00
else. I think you can also click on the code agent right before it uses the terminal and click on the output and in
3:39:06
here you can see npm install framer motion. So that's what it run. I'm not sure if that's the newest version of
3:39:13
framer. Maybe this won't even work. I don't know but let's click on get sandbox URL. Let's click here
3:39:21
and let's see maybe it will be broken. Yeah, looks like this doesn't work. It should use motion package not framer
3:39:28
motion. So, as I said, uh it's not perfect, right? You can break it every now and then, but you can also improve
3:39:35
it just as easily, right? As I said, Claude Sonnet 3.5 is by far the most
3:39:40
reliable coding agent because it just it is up to date with everything. It just knows everything, right? But you will
3:39:48
hit limits very very soon. So, your best option for now is to create this kind of
3:39:56
app, right? using open AI and simply improve the prompt as much as you can.
3:40:02
So I did this myself and I am not a prompt engineer. So you can definitely create this better than me. Your
3:40:08
starting point uh should be this. You're a senior software engineer and the most
3:40:14
the other important part is this. Give it a very important ending. So this
3:40:19
should be your ending. Everything in between after before final output you
3:40:24
can change. So I wrote all of this with the help of AI and I basically added more things as I saw uh they as I saw
3:40:31
some things fail. So for example, sometimes it attempted to run dev itself or build. So I told it you must never do
3:40:40
that, right? It's always working. Uh so yeah, you can learn how to prompt a
3:40:45
little bit better and you will get better results or you can simply use a newer model. So, how about we try build
3:40:52
a conbon board use react beautiful
3:41:01
drag and drop. Let's try that. Maybe we will have some uh better results with this package.
3:41:08
So, this is the result of the query to build a conbon board. As you can see,
3:41:14
the first terminal command actually failed and we can actually see the error
3:41:20
here. So, let's go ahead and scroll down here. Error error unable to resolve the
3:41:25
dependency and it probably told it that it needs to use uh legacy peer depths.
3:41:33
You can see this retry this command with d-force or legacy peer depths. And then
3:41:39
what happened is it simply retried that and you can see then it worked. So
3:41:44
that's the power of ingest and that's the power of returning the result of the
3:41:50
terminal tool. Right? So we tell it the command failed and we tell it why it
3:41:56
failed. So that way it knows how to retry. And my get sandbox URL uh was
3:42:03
this what seems to be a working conbon board.
3:42:08
test. Amazing. It seems to have some issues. It's missing a prop set here, but
3:42:16
honestly, other than that, pretty damn good. Look at this.
3:42:22
Amazing, right? It even highlights where it's going to land. Very, very cool. Uh,
3:42:29
great. So, I think that marks the end of this chapter. uh till we finish this project, we will add some methods to
3:42:36
improve the failing builds, right? We will allow the user to tell the AI like,
3:42:42
hey, you forgot to add use client so it understands what happened previously and then it can just easily fix the issue.
3:42:49
That's at least what we are going to attempt to do. So even if something fails, uh we will allow the user to
3:42:55
instruct the AI and tell it, hey, it failed. Can you please fix it? Because you know, I saw lovable fail. I saw
3:43:02
replet fail. I saw v 0ero fail. All of these apps fail, right? They are just AI. It's a it's a language model after
3:43:09
all, right? So, it can definitely fail. But I think it is super impressive given
3:43:15
the fact that we built it so soon and so fast. Amazing, amazing job. Let me mark
3:43:21
all of these things as complete here. And now, let's go ahead and branch out.
3:43:26
So, 07 agent tools. I'm going to go ahead and create a new branch
3:43:35
07 agent tools. I'm going to stage all of my changes.
3:43:42
07 agent tools. I will commit and I will publish my branch. As always, you have a
3:43:50
completely free code rabbit extension you can install inside of Visual Studio Code if you wanted to review your files.
3:43:58
And now let's go ahead and let's open a pull request so we can merge our changes
3:44:03
and so we can review them here with a summary.
3:44:09
And here we have the code rabbit summary. So we have enhanced agent capabilities with multi-tool multi-agent
3:44:16
network for sandbox interactions including terminal commands, file operations and summary extraction. We
3:44:22
also introduced a comprehensive system prompt outlining coding standards and environment constraints for improved
3:44:29
code generation and consistency. Perfect. So that's exactly what we did. And in here we even have a sequence
3:44:35
diagram of how it happens. So once the background job is triggered, we can see
3:44:41
that now the coding agent can use the terminal, create or update files or read files as needed and then the tools
3:44:48
return results using std out using files contents or anything else. And depending
3:44:55
on that the code agent is either calling another tool or finally it returns with
3:45:02
the last message which includes the task summary tag signaling that it is over
3:45:09
and then we can return the sandbox URL. So in here it actually uh recommends not
3:45:16
doing a double turnary instead ending early here. So that's quite a good suggestion.
3:45:22
We could possibly do that. Then below here, it fixed a typo to agent. That is
3:45:29
definitely a mistake. Great. Uh, and in here is something quite interesting. So,
3:45:35
what I do here is if I fail, I simply
3:45:40
return an error. So, I practically never store anything if it fails. But in here
3:45:49
it recommends actually doing partial saving right. So if there is at least
3:45:56
some files which were successfully created save them but still throw an error. So quite a good suggestion but in
3:46:04
my experience if it fails on one file it will fail entirely because uh this
3:46:11
doesn't mean that it wrote incorrect code. If it throws an error here, it means it lost access to the file system.
3:46:18
That's why I'm not exactly worried about this. I will pretty much always expect it to be able to write all files it
3:46:25
needs. But very good suggestion here to handle partial success. I will look into
3:46:32
that. Let's go ahead and let's merge this pull request here. I'm not going to
3:46:37
delete the branch as always. So I have access to it right here. And now that we
3:46:42
are here, let's go ahead and go back inside of our main and let's go ahead
3:46:48
and synchronize our changes. And that should officially mark the end of this
3:46:53
chapter. Just a sanity check here. There we go. We just merged 07. Amazing,
3:47:00
amazing job. We are now ready to start building our UI. See you in the next
3:47:06
chapter. In this chapter, we're going to implement the messages entity. This will
08 Messages
3:47:13
include creating the actual message Prisma schema, the fragment Prisma schema, and then we're going to modify
3:47:20
our current TRPC procedures and our background jobs to use those new schemas
3:47:25
and save user prompts and AI responses in their appropriate models. So, let's
3:47:32
start by creating a simple message schema. In order to do that, we have to go ahead and visit our schema file.
3:47:39
Before you do that, as always, confirm that you're on your main branch. And if you are unsure if you have any
3:47:44
unsynchronized changes, you can always click this and confirm. And just make sure that chapter 7 is your last merged
3:47:52
change here. Great. Now, let's go ahead inside of Prisma and schema.prisma.
3:47:58
If you have a folder with migrations here, you can delete it because we're going to remove pretty much everything
3:48:04
inside of here. Right? So, we're going to create a whole new schema now. So,
3:48:09
let's go ahead and create a model message inside create an ID which will
3:48:15
have a type of which will be a type of string is going to be an ID with the
3:48:20
default value of uyu ID. After that, let's go ahead and create a content
3:48:26
which will be a type of string. Let's go ahead and add a role which will be a
3:48:32
type of enum. So, let's create an enum message type.
3:48:37
And let's give it uh my apologies not message type message role
3:48:45
which can be a type of user or assistant and then you can go ahead and use that
3:48:50
right here. So simply assign the role to be message ro just like that. And now
3:48:57
we're going to do what I started to do which is the message type.
3:49:02
So the message type will either be a type of result or a type of error.
3:49:09
And let's go ahead and give this a type of message type. So in case the AI response fails, we are going to treat it
3:49:16
as an error. meaning that the AI will simply return uh I wasn't able to do
3:49:23
this generation for whatever reason please retry and now let's add the usual created ad
3:49:30
field which is a type of date time and the default value of now and let's add
3:49:36
updated ad which is a date time as well and it has a special decorator updated ad which is a very cool decorator
3:49:43
because what it does is it will automatically update this build when we update the message model. And now let's
3:49:51
go ahead and let's create a fragment model. So the fragment model
3:49:58
will also have an ID of string and the default value of UU ID and it will have
3:50:03
a relation to the message. So let's add a message ID to be a type of string and it needs to be unique.
3:50:10
Now let's add a message here to be a type of message. Give it a relation decorator targeting the fields message
3:50:18
ID which we defined above referencing the ID field in the message
3:50:24
model. And let's add on delete here to be cascade. So if this message gets
3:50:29
deleted, the fragment gets deleted as well. And now we just have to fix this
3:50:34
error by adding a proper relation here in the message. So the message does not
3:50:40
have to have a fragment. If the user is sending a message, there will be no fragment. Only for the AI response will
3:50:47
there be a fragment. That's why we're going to create a fragment field and we're going to make it a type of
3:50:53
fragment, but it's going to be optional like this. And then let's go back inside
3:50:59
of the fragment model and let's create a sandbox URL to be a type of string, the
3:51:04
title to be a type of string, and files to be a type of JSON. So this is quite
3:51:11
cool. Uh it's very nice that possess allows this and it's perfect for our use case because files is not exactly
3:51:19
something that in my opinion makes sense to create a whole new model for because it's just a simple mapping of the file
3:51:26
path and the content and it can be pretty much infinite in size. Well, obviously not infinite but you know what
3:51:33
I mean. So I think this is a very good use case of using JSON in posgress and
3:51:39
then we can just copy the created ad and the updated ad from the model above just
3:51:44
like that. Now in here you should have no errors and again make sure that you're using the Prisma
3:51:50
extension simply so you have the syntax highlighting and it will tell you in advance if you've done anything
3:51:56
incorrectly here. So what we have to do now is we have to push this. So let's go ahead and shut down our app. Make sure
3:52:03
you have shut down your ingest server as well. And I will now run npx prisma
3:52:08
migrate dev. And let's just wait a second for this to connect to our
3:52:13
database. So I have gotten an error. In your case,
3:52:18
you might not get an error. But I think this is because yes, it detected some
3:52:23
drift. Your database schema is not in sync with your migration history. That's because I told you to manually delete
3:52:29
the migration folder. This is not a problem. We are working with development data here. So let's use npx prisma
3:52:36
migrate reset first and let's just reset the entire thing. So let me just confirm
3:52:41
this. Um and even if this doesn't work, you can always just create a new
3:52:46
postgress database and then just go instead of environment and just use a new database URL. Right? That's like the
3:52:52
ultimate brute force you can do. So after I've done my migrate reset, I will
3:52:57
try migrate dev again. And this time with no problems, I'm
3:53:03
going to call this message-fragment. And there we go. Just like that, we have
3:53:09
created new schema here. And now you can go ahead and run the npx Prisma studio.
3:53:15
And in here, you should see the fragment and the message as the models, meaning it successfully created that. Perfect.
3:53:21
So now let's go ahead and let's actually use these things. So what I want to do now is I want to go inside of source and
3:53:29
I want to create a new folder called modules. So I like to have a module-based
3:53:36
structure in my application. So instead of having my procedures written here
3:53:41
randomly, I will have them in their own module. So I like to separate modules
3:53:47
either by large chunks of my application like homepage, landing page, pricing or
3:53:55
by entity models that I have in my database. So for example, let's go ahead and let's create messages in here. So
3:54:03
inside of here, I will keep everything message related. So for example, one of those things would be all the things
3:54:09
that go on the server uh regarding messages, specifically all our
3:54:14
procedures. So now that we are inside of here, we're going to import uh initc router or
3:54:22
create tRPC router from trpc init. And let's export const messages router here
3:54:28
to be create trpc router. And then inside of here, let me just quickly
3:54:33
check inside of my TRPC routers app. I seem to have this existing one called invoke. So now what we're going to do is
3:54:40
we're going to create a create procedure. So this will be accessed through as message.create.
3:54:49
This is how you will call this. That's why it's called create and not create message because it would be redundant.
3:54:55
Message dot message create or create message, right? Makes no sense. So let's
3:55:00
add a base procedure which will of course be a protected procedure later on in the tutorial. For now it's perfectly
3:55:06
fine to be a base procedure. Let's go ahead and define an input here. And I'm
3:55:11
going to set this to be uh the value. It can be the value. It can be the prompt.
3:55:17
I think value is good enough. And let me just import Z from zod. Let's go ahead and set it to be a
3:55:24
string. And let's give it a message is
3:55:29
required error. Great. And then let's go ahead and let's
3:55:34
chain mutation here is going to be asynchronous.
3:55:40
Let's dstructure the input from here like this. And then inside of here, what
3:55:46
we're going to do is we're going to create a new message by using await
3:55:53
Prisma from lib database and then go ahead dot message dotcreate
3:56:00
and pass in the data inside. And let's add the content to be input value here
3:56:06
like this. And let me just see what else do I have to add inside because I already forgot how my schema looks like.
3:56:13
So I have to add a role and I have to add a type. So my role here will be user
3:56:19
and my type here will be result. Right? There's no loading. This is an instant message created by the user.
3:56:26
Perfect. So I think I actually don't even need to uh put that in any type of
3:56:33
constant. I think this works just fine. And what I'm doing after this is I'm actually invoking my background job. So
3:56:40
let me go inside of the routers here and let me just copy this part
3:56:45
inside of procedures and let's go right here. So let me import inest from the inest client. Let me show you my imports
3:56:52
a bit simply so you're on the same page. There we go.
3:56:58
And obviously we're going to have to change this as well. It makes no sense to be called test. Uh and uh this is
3:57:05
what we should actually do. We should keep this as created message or new message and then simply return created
3:57:13
message simply. So our API response has some kind of well response for the user
3:57:19
back. Perfect. Now that we have the basic message router created with some
3:57:25
basic validation here, let's go ahead inside of TRPC routers and let's remove
3:57:32
everything inside of here. And then in here add messages
3:57:37
messages router. You can import the ingest. You can you can remove zone. You can remove inest and you can remove the
3:57:43
base procedure just like this. And this is how we're going to add all
3:57:49
other uh module related things inside. So later when we add fragments it will
3:57:55
be fragments router and we will control all procedures inside of its own module.
3:58:03
Right, like this. Great. So now obviously we need to fix some things in
3:58:10
our page I believe. So let's go inside of source app page.
3:58:15
And in here this is now create message. This will be TRPC dot messages.create.
3:58:23
And the on success is the same. In here we can just say on success message
3:58:29
created. And then let's go ahead and let's use create message is pending and create
3:58:35
message.mmutate just like that. So right now uh this
3:58:40
should still work exactly the same right let's go ahead and just quickly try it
3:58:45
out uh just to make sure we didn't accidentally break something. So npm rundev in one npx inest cli latest dev
3:58:53
in the other one. Let's go and we can install the new one. If it appears it's okay. And let's go ahead and open local
3:59:00
host 3000 here. And I'm going to do create a landing page simply because this is the simplest thing that most
3:59:07
likely won't go wrong. There we go. Looks like it is created. So I'm going
3:59:12
to click invoke a background job here. And looks like message was created. I'm
3:59:19
going to go inside of my inest developer server here. And I'm going to wait for this to complete.
3:59:26
And here we have it. It is complete. and quite a nice result. I'm always
3:59:32
impressed by its landing pages. It seems to have uh gotten that it seems to have
3:59:37
gotten very good at creating landing pages. Uh great. So, looks like everything is still working. And now
3:59:44
what we have to do is while we are storing the messages from the user, we
3:59:49
are not storing the messages from the AI. So in order to keep track of that, how about we extract the messages here
3:59:58
by using use query from tanstack query. So just make sure you add this import
4:00:03
here. Pass in tRPC do messages. And I just remembered we didn't create any. So
4:00:08
let's simply go inside of the messages router which is inside of your modules here. And simply create uh let's call
4:00:15
this get many base procedure. The input doesn't really matter for now.
4:00:23
Let's just do a query here. Again, it's going to be an asynchronous method.
4:00:30
And in here, what we're going to do is get the messages to be await Prisma
4:00:35
message find many. And how about we do order by and let me just see I have to
4:00:43
use updated at or created at let's use ascending and return the messages.
4:00:50
like this and just like that we have our get many procedure. So now we can go back here and add it. There we go. Get
4:00:57
many. This will be query options here. And then inside of here, let's go ahead
4:01:03
and do it below the button. JSON.stringify messages null 2. So now you can see that
4:01:11
I just created this create a landing page with the ro user. So if I go ahead
4:01:17
and do create a red landing page and invoke this background job and refresh
4:01:24
this page, you can see that now I have create a landing page and after that I have a create a red landing page. So let
4:01:31
me go inside of my procedures and change the updated ad to be descending and refresh and then the newer message
4:01:38
appears at the top. And if you want you can wait for the result but uh you know it's it's not that important right now
4:01:45
but it definitely created a red landing page. Great. So now again I'm expecting
4:01:52
that besides having these steps to get sandbox ID create our update and then
4:01:58
finalize. I also needed to save this entire thing to the database so that we can access it from the UI and not from
4:02:05
the inest developer server. So let's go ahead back inside
4:02:10
of ingest functions here and then we're going to create a whole new step here at
4:02:17
the bottom. So after we get our sandbox URL, we have to go ahead and actually
4:02:23
save this to the database. So let's do await step.r run save result
4:02:32
asynchronous method like this. And in here, let's return await Prisma dossage.
4:02:40
Whoops. We have to import Prisma from lib database. So just make sure you add this import.
4:02:46
And we're basically going to save the content. So prisma dossage.create.
4:02:52
The data will be the following. Content is going to be result state data summary
4:03:01
and role will be assistant. and type here will be result like this. And let's
4:03:09
also extend it a bit further by also creating the fragment relation. Let's
4:03:15
pass in the sandbox URL here. Uh sandbox URL doesn't exist. Did I do something
4:03:22
incorrectly in my schema or is it just the syntax that I didn't finish? It definitely does exist here. So perhaps I
4:03:30
just have to do result actually sandbox URL like this.
4:03:36
Oh my apologies. This is not how you do it. Create and then sandbox URL. Sandbox
4:03:43
URL. And let's go ahead and add the the title of the fragment to be just fragment
4:03:49
and files can be result state data files.
4:03:55
There we go. So now let's go ahead and try and do
4:04:00
this again. So use a simple prompt again. Build a blue landing page. So
4:04:06
basically something simple and then wait for this to finish. And after it finishes, you should now see another
4:04:14
step happening here which is to save the result in Prisma. It should create a
4:04:21
assistant message and it should also create a fragment with the sandbox URL
4:04:26
and all the files that it created. There we go. So we have the save result
4:04:33
step. And now if I go back here, there we go. You can see I have a new message
4:04:39
here at the top. The content includes the task summary, created a fully responsive production quality blue
4:04:46
themed landing page in app page tsx. The layout includes a navbar, hero section,
4:04:51
favorites, pricing, contact form, and footer. Uh, and we don't really have access to the sandbox URL here. That's
4:04:58
because what we have to do if we want to see that is go inside of the message router and we have to add include
4:05:05
fragment true. And after you do that, you will see the entire fragment
4:05:10
content. So you will see the entire source code actually. And you will see the sandbox URL. So if you try adding
4:05:18
that here, we now have the blue landing page. And that is basically what we now
4:05:24
have to do. So uh let's remove the fragment for now. We can easily add it
4:05:30
later because I'm not sure if we need it and it's taking up a lot of space. Uh perfect. So this is what I actually
4:05:36
wanted to do for this chapter. I wanted us to add the messages router and I think that we can do one more thing
4:05:44
while we are here and that is the following. We can go inside of ingest
4:05:49
here instead of functions and let's just change this right. Let's stop calling it hello world. Let's go ahead and call
4:05:56
this uh code agent. The ID will be code agent. And let's also change the event
4:06:05
to be code agent run
4:06:10
like this. And now just make sure that you go back inside of your modules messages server procedures here and when
4:06:18
you invoke it make sure to change this like that or any other place where you
4:06:25
do this make sure to change it. For me it's only one place code agent run. Uh
4:06:31
okay. And now we have to also go inside of app API ingest route and we have to
4:06:37
replace this with code agent. There we go. Go ahead and refresh.
4:06:44
Uh if it's still stuck, you can always shut this down. And I would recommend
4:06:49
shutting both of them down. And let's go ahead and refresh again.
4:06:56
Build a green landing page. message created. And I recommend waiting
4:07:04
it out just to confirm it works since we just changed this to be a code agent function.
4:07:12
There we go. Seems to work quite well. And I think that is it for this chapter.
4:07:18
Oh, this one's nice. uh we've basically created the message model, the fragment model which
4:07:24
basically puts it puts us in a position where we can start creating proper UI
4:07:29
around this because uh by having the fragment and by having the message we
4:07:35
can create the file explorer we can create the I frame where we render the
4:07:40
URL and we can create the message containers on this side and while we are here it is important to do uh one more
4:07:48
thing go inside of your functions.TTS in the ingest here and after you do uh the
4:07:56
result from the network run define an is error constant and it will be an error
4:08:01
if we don't have result data summary result data.state state my apologies
4:08:11
state data summary or if object do keys result
4:08:18
state data files or an alternative empty array.length
4:08:24
is equal to zero. So if any of those two are missing it means something went
4:08:31
wrong. So inside of here when we save the result what we're going to do is we're going to check if is error we're
4:08:39
going to return content. Whoops my apologies. We're going to uh
4:08:46
return await Prisma message create data content
4:08:54
something went wrong. Please try again.
4:09:02
like this. Let's give it a role of assistant and let's give it a type of
4:09:08
error like this. There we go. So, we do an early return if we detect it is an
4:09:14
error. So, we don't create the fragment if we don't have the information to
4:09:19
create it. And the one thing I completely forgot about is the types here. So, right now files is a type of
4:09:26
any, summary is a type of any, right? And while this seems to not create any problems for us, I want to show you that
4:09:33
there is a way so that you can properly type your entire network state because I think that is important and it will make
4:09:39
your project more maintainable. So let's go ahead above the uh code agent here
4:09:45
and let's create an interface agent state and let's go ahead and do the following. Let's make a summary a string
4:09:54
and let's create files which can be mapped as a record string string. But I
4:09:59
don't like this simply because there is a way to make it uh closer to what we expect and it's basically opening an
4:10:05
object and then defining path as the key and simply the content as a string. I
4:10:11
think this more closely resembles what we expect rather than record string string.
4:10:18
Now that we have the agent state, uh we just have to find all the places to use it. So starting with uh oh yes, I really
4:10:26
don't like this. We should not name our function and our agent the same. So how
4:10:31
about we rename one of them? Let's call this uh code agent function
4:10:40
like this. and then go back inside of your uh source app API inest route code
4:10:46
agent function code agent function like this way safer like that okay now let's
4:10:55
go ahead and use the agent state instead of the code agent here we can open uh
4:11:01
pointy brackets and pass it inside so that's step one then the next place we
4:11:06
can use it is in the tool create or update files so In here we have step and
4:11:12
network and you can see that files here are undefined even though we added it to the agent state. That's because what we
4:11:17
have to do here is we have to define this step as a type of tool from inest agent kit. So just make sure that you
4:11:25
import the type tool from inest agent kit. I think you can specify type like
4:11:30
this. Let's go back here. So it's going to be a type of tool dot options and pass in
4:11:38
agent state inside. And then when you hover over files you will see that it
4:11:43
has the correct state. So that's the second place and the third place is in
4:11:49
the network here. So open this up agent state
4:11:54
like this and then data dos summary is a type of string now and you will see that
4:11:59
you now have autocomplete. And if you type something else,
4:12:04
you should get an error now. Right? So when you clearly define your state, it is much stricter and you will not be
4:12:10
making any mistakes now. Uh perfect. So I think that this is it for this chapter
4:12:17
then. Uh and let me just check uh how does this look like? Summary. So this
4:12:23
looks like it doesn't need anything because life cycle seems to infer properly from create agent agent state
4:12:30
here. Right? So if I change this, I'm getting an error. Perfect. Great. So I think that this could be it
4:12:39
for this chapter. So I'm going to stop here. Let me just fix this fix this description coding agent
4:12:45
like this. And of course, yeah, if you want to, you can change the name of this. I told you you can always go
4:12:51
inside of your let me find the folder sandbox templates
4:12:58
toml file and you can change the name here and then simply run inside of this
4:13:03
folder E2B template build. Great. So now that we have this let's go
4:13:10
ahead and open a pull request. If you want to, you can also, you know, try another one just to confirm it works
4:13:16
because we changed again the name of our function. But at this point, I think you know how to fix it. But let's just try
4:13:23
build a yellow landing page just for sanity check so I don't end the
4:13:29
chapter and things are broken and seems to work just fine. Let's go
4:13:36
ahead and see the yellow landing page. Perfect. So let's go ahead and open a
4:13:42
pull request. So this chapter is 08 messages. Uh we just created the message
4:13:48
schema fragment schema. We're saving the user prompt and we are saving the user response. Perfect. So I'm going to go
4:13:55
ahead and I'm going to create a new branch 08 messages.
4:14:01
I'm going to stage all of my changes. I'm going to add a commit message and
4:14:06
I'm going to commit and publish the branch. If you want to, there is a free Code
4:14:12
Rabbit extension which can help you review all of your files here. Now,
4:14:17
let's go ahead and go inside of our GitHub and let's go ahead and open a
4:14:22
pull request and let's review with the summary and the diagram here.
4:14:29
And here we have a summary. So, let's quickly go over it. So, we end this chapter. We introduced a new messages
4:14:36
system allowing users to create and view messages with associated metadata and
4:14:41
fragments. Messages now display additional details including message type and role. And we did some refactors
4:14:49
such as we streamlined the backend procedures and routing for the message management and we removed the legacy
4:14:56
user and post data structures. Perfect. So in here we have the diagram but
4:15:02
nothing much has been changed from last time except this time we have additional step before we invoke the code agent run
4:15:10
which is that we save the user message in the database and we have one more step in the background job where we save
4:15:17
the uh message to the database to the Prisma here. Great. And in here we have
4:15:23
uh some comments but all of these things will be changed. The on error will be
4:15:28
added here later. This will basically not be in this component at all. So that's the only reason why I keep you
4:15:34
know not fixing this comments. Uh not because they're wrong. They're completely right. But it's not the
4:15:40
component they are going to be in anyway. This is just for demonstration. Right? We are now going to start and
4:15:46
build the proper UI in here. Uh I'm pretty sure this is not needed simply because uh inest events have their own
4:15:53
try catch methods. So let's go ahead now uh and go through the rest of these. So
4:15:58
in here it recommends pagionation. That's something we can look into later.
4:16:03
But yes, it's very easy to add pagionation with Prisma. As you can see, they have take, they have skip, and
4:16:09
that's pretty much all you need here. Uh in here, it recommends limiting the length of the message, and that is
4:16:16
definitely a good thing. Yeah, we don't want any user to be able to spam our app with a huge number of tokens. So we will
4:16:22
have to limit this to some reasonable number. This is a very good suggestion here. Let's go ahead and merge our pull
4:16:29
request. As always, I'm not going to delete my branch. Instead, what I'm going to do is now I'm going to go back
4:16:35
to my main branch here and I'm going to click on synchronize changes. And once that is finished,
4:16:43
I can go inside of my source graph and confirm messages are the last merged
4:16:48
chapter. Amazing. Amazing job. and see you in the next chapter.
09 Projects
4:16:57
In this chapter, we're going to add the projects entity to our application. So,
4:17:02
this chapter will be quite similar to the previous one where we introduced the message model. So, in this chapter,
4:17:09
we're going to add the project schema. We're going to add message relations to
4:17:14
that project. And then we're going to create a new project on user prompt. And
4:17:20
the last thing we have to do is preserve project ID in background jobs so we know
4:17:26
where to store that AI result. Basically, each message needs to belong to a project so we can keep track of all
4:17:34
of our uh AI generations. So let's go ahead and start by adding a new Prisma
4:17:41
schema. As always, confirm you are on your main branch. And if you haven't, synchronize your changes. You should
4:17:47
have 08 messages as your last merge. So I'm going to go inside of Prisma. I have
4:17:52
some migrations here because we added them last time. And now let's go above the message here. And actually let's go
4:18:00
above message type and above message ro. And let's add a model project. The ID
4:18:06
will be the same as the message. So you can add it here. The name will be a
4:18:12
string. And then we're just going to have created at and updated at. So we
4:18:18
can add this and then down here add messages which will be a type of message
4:18:24
like this. And now we have to create an equal relation in the message model. So
4:18:29
let's go inside of the message model here and let's go ahead and add project
4:18:36
ID to be a type of string and below that project to be a type of project. Give it
4:18:43
a relation decorator with fields project ID references ID and on delete cascade.
4:18:54
So exactly the same as the message relation in the fragment right we are aiming for project ID field referencing
4:19:01
the ID field in the project and if the project gets deleted the message gets
4:19:06
deleted as well and then the fragment gets deleted as well. Perfect. So now that we have this we have to push that
4:19:13
to our database. So I recommend shutting down both of your uh servers here. And
4:19:20
let's first do npx prisma migrate reset simply so we remove everything from our
4:19:26
database because we have invalid data at the moment. And once this is deleted,
4:19:32
let's go ahead and do npx prisma migrate dev. And once it connects to the database, let's go ahead and call this
4:19:39
migration project. There we go. So I'm going to call this
4:19:44
projects like this. And that should apply the migration. Perfect. Now let's
4:19:50
go ahead and start this server. And let's start the ingest server here.
4:19:56
There we go. So now what we're going to do is the following. We're going to go
4:20:01
inside of source inside of modules and let's copy the messages and paste it
4:20:07
here. And let's rename it to projects. Let's go inside of server procedures.
4:20:13
Make sure you are inside of projects here. We're going to change this from messages router to projects router like
4:20:20
this. And then we're going to modify uh how this works as well. So for the get
4:20:28
many change this to be projects and then in here await prisma.pro
4:20:35
find many. So that's the get many procedure for the project's router. for the create here uh the value will
4:20:44
also be uh the message right and actually I'm not even yeah so we are
4:20:50
going to create a project by entering a prompt right so we are not going to
4:20:56
create a new project and then give the project a name instead we're going to have a big landing page like this and we
4:21:03
will simply say hey enter something like create a Netflix clone and then we're going to click create and this will
4:21:10
create both the message and the project at the same time. So in the create we
4:21:16
actually only have the value right the prompt. So that's going to be this. So we're going to do the following const
4:21:24
created project await prisma project create
4:21:31
and then for the data uh we have to give a project a name. So for this we're
4:21:36
going to add a generator package to our project.
4:21:41
So let's go ahead and let's quickly do npm install random words slugs. Random
4:21:49
word slugs. You can of course use a billion other uh generators, but this is
4:21:55
the one I found that looks the most like uh all the other apps I can find. So
4:22:00
this is the version 0.1.7 in case you're interested. And let's go ahead and use
4:22:06
it now. So let me just add it here. Generate slug from random words slug.
4:22:11
And then in here uh in here the name will be generate slug and pass in two
4:22:19
words. And let's go ahead and open the settings and pass in the format to be ke
4:22:24
like this. So that will be it for the name. And now we have to immediately
4:22:31
create the message. So we can do that either uh separately like this or we can
4:22:36
just pass in the message messages here and then open the create inside and you
4:22:42
can just copy this exactly like this and then you can remove this
4:22:48
and then we start the ingest here and besides sending the value we will also
4:22:54
send the project ID to be created project ID and then in here you will
4:23:01
have created project as the return and that's it. That is our create method for
4:23:07
the project's router. So in here it would be a good idea uh to limit the
4:23:12
length as our code rabbit suggested previously. So let me add maximum here and let's add
4:23:20
I don't know 10,000 maybe that could be the good upper limit.
4:23:26
Message is too long. This is not actually the message.
4:23:32
This is prompt, right? Or value since
4:23:38
this is called value. So yeah, it's either going to be required or if it's longer than 10,000 characters, we're
4:23:44
going to say, okay, that's too long. Uh you can of course modify this later to
4:23:49
however you like. Perfect. So you can of courseh also play around uh with this,
4:23:55
right? It even has some more options which you can do but I found this to be sufficient and also in our Prisma schema
4:24:03
the project name is not unique so it doesn't matter if there are conflicts
4:24:09
with this right great so now that we have this we also
4:24:14
have to modify our messages procedures here because
4:24:20
right now uh they are not exactly working. So let's go inside of the
4:24:26
create base procedure here. And for the value, well, we can just copy this just
4:24:33
so we're on the same page here. So either min or max. And then let's also
4:24:40
add project ID here, which will be a type of string with a minimum value of
4:24:47
one and a message project ID is required
4:24:52
like this. And then in here when we create a new message we will also assign project ID to be input project ID. So
4:25:00
each message will be stored in an individual uh agent in an individual
4:25:06
project. Right? And now what we have to do is also modify the ingest send to
4:25:12
also accept project ID from input project ID
4:25:17
like this. There we go. And now what we have to do is we have to modify our ingest functions to accept
4:25:27
the project ID. So let's go all the way down here to
4:25:32
when we actually save the result. And you can see we have an error here. That's because this
4:25:39
message is missing the project ID. So project ID will be input. My apologies.
4:25:46
It is event. Let me just find it. Uh how do I do this? Just a second.
4:25:54
Event data value. So this will be event data project ID like this and do the same
4:26:03
thing here. So basically you have to make sure that anytime a message is created you add
4:26:10
project ID. So you can highlight this part and use command shift F to search
4:26:15
it through your entire project. And basically every place that you find this, it should include project ID. So
4:26:22
just be extra careful in the functions of the ingest here so you don't forget
4:26:28
to uh so you don't accidentally misspell this, right? Because there are no strict
4:26:33
typings here. We can improve this later on, but for now just make sure you didn't misspell project ID when you
4:26:40
extract it from event data. Perfect. And now let's also do inest dot
4:26:47
send simply so we see that we are sending project ID in all places that we need. Great. So in here we are
4:26:54
extracting it from the created project but in here it is from input project ID.
4:26:59
Perfect. So now what we have to do is we have to go inside of source app folder
4:27:04
page.tsx and we have to modify this. So this will no longer be creating messages and we no
4:27:11
longer have to query messages. We only did that before because we were interested in seeing them. So we can
4:27:16
remove this and instead we can do create project and this will be TRPC
4:27:23
uh projects which doesn't exist. The reason it doesn't exist is because we forgot to add it. So inside of TRPC
4:27:29
folder routers app add projects projects router and you can import it from
4:27:35
modules projects server procedures. Basically this thing we just created.
4:27:41
And now that we have that we have a proper working projects create we can remove uh on success and instead we can
4:27:49
add on error here and you can do toast error error dot
4:27:55
message like that. And now that we have the create project
4:28:02
let's go ahead uh and let's do create project is pending and create project domutate. And
4:28:10
this will be submit like this. And let's go ahead and just
4:28:16
modify this slightly by adding height screen with screen flex item center and
4:28:23
justify center. And inside of here, let's do
4:28:28
this. Let's give this a class name. Maximum
4:28:33
width 7 XL MX auto flex item center.
4:28:40
Let's do flex call and gap Y for an
4:28:46
items and justify center.
4:28:51
And now when I refresh this, there we go. It looks like a centered little prompt. We can maybe expand this. Let's
4:28:59
see. maximum width. Okay. Uh screen
4:29:08
let's just keep it at 7 XL like this. And when you write test now and click
4:29:13
submit uh it should say well nothing nothing for the success message. But now
4:29:19
what should happen is the following. It should create well I have no idea what it's going to create now because I just
4:29:26
typed test. So let's actually see. Okay, so the it returns the error. Something
4:29:32
went wrong. Please try again. Right? Even though it generated something in the sandbox, I have no idea what that
4:29:37
is. I think not a single file was modified yet. So it's just an empty Nex.js page. But if you look at your
4:29:43
Prisma Studio now, and if you actually start it, so let's do npx Prisma Studio.
4:29:50
You should now have a project. And inside of that project, you should have
4:29:56
There we go. I have a name uninterested plastic. So a new project was generated and I have two messages inside. The
4:30:03
first is the message from the user who asked test and then a response from the
4:30:08
assistant which is a type of error because something went wrong because this is clearly not something the AI can
4:30:14
generate. Right? So let's try build a landing page and let's click submit. And
4:30:20
what should happen now in the Prisma Studio here uh this one is that we should have a new
4:30:27
project now modern London with one message. As you can see let's just
4:30:33
refresh. There we go. So build a landing page by user. We are running this and
4:30:39
now we should have a successful example and all the messages for this project
4:30:44
will be stored in that project. So you can see how our submit data was a project ID and the value build a landing
4:30:51
page. So there we go. Now when I refresh this again,
4:30:57
I should get another message from the assistant with the task summary. And this message also has a
4:31:04
proper fragment. And inside of here we should be able to see let's open in new
4:31:11
tab this fragment. And in here I have the sandbox URL. And I should now see
4:31:17
the landing page. There we go. Perfect. So now that we have this uh let's go
4:31:23
ahead and just do one more thing so we can start building the UI for these messages. So let's go inside of source
4:31:30
app folder. Let's create a new folder called projects and in here open project
4:31:36
ID. So this is basically a dynamic URL part. Uh it's important how you write
4:31:42
this. So curly brackets uh square brackets are extremely important. And then how you type inside is exactly how
4:31:49
you're going to extract this value. So be mindful of casing. Right
4:31:55
now add page.tsx here and export uh do a page export like this
4:32:03
and a div like this. And this will be project ID. And then to extract the
4:32:09
project ID, you simply create an interface props with params which are a
4:32:14
type of promise. And inside project ID which is a type of
4:32:19
string. And then in here you can extract the props. You can extract the params.
4:32:26
And since this is a server component, you can make this an asynchronous component and extract the project ID
4:32:32
from await params. And then you can set the project ID to
4:32:38
be project ID. As simple as this. So how do I know that it is project ID? How do
4:32:43
I know it's not project ID 1 2 3? Because of how we named the folder. So
4:32:49
if you name this with a lowercase letter I, then you need to change this to
4:32:54
lowerase letter I. So be mindful of how you name this dynamic folder. And once
4:33:00
you've done that, go back to your page here and go ahead and add router from
4:33:06
use router from next navigation like this. And then add the on success
4:33:13
here which I'm going to transform into an arrow function simply because I prefer
4:33:19
them. No other reason. We only need the data here. And let's do router.push
4:33:25
forward slash projects and then data id. So how come that we have the data ID
4:33:31
available for us? Because in the create procedure, we return the created project. So this
4:33:39
new project that was just created, we have its ID right here. So now if I do
4:33:46
build a blue landing page and click submit right here, there we go. I'm
4:33:51
redirected to project ID and that new project. And now in here I will load
4:33:57
only the messages for that project. So in the next chapter we will go inside of
4:34:02
our modules messages procedures and we will modify the get many to accept a
4:34:09
specific project ID and then query by project ID instead of loading all of them. But that is for the next chapter.
4:34:17
Amazing amazing job. So you just added project schema. uh in our uh entire
4:34:23
application we will have one more model in the database but this is pretty much it. Amazing. So we added the project
4:34:31
schema message relations new project on user prompt and we preserve the project ID in background jobs. Now let's go
4:34:38
ahead and commit this. So I'm going to open a new branch
4:34:44
09 projects. I'm going to stage all of my changes. 09
4:34:51
projects. And I'm going to click commit. And let's go ahead and publish the
4:34:57
branch. And then let's go ahead and open a pull request.
4:35:03
Just like that. And let's see the summary of this chapter.
4:35:10
And here we have the code rabbit summary. We introduced support for projects allowing users to create and
4:35:16
view projects each with an associated initial message. We also added a dedicated project page displaying the
4:35:22
project ID for now. This will later be the actual interface where you will chat
4:35:27
with an AI and see the preview of your work. And in here we have a couple of uh
4:35:33
recommended changes. So in here it recommends throwing an error in the background job if it cannot find the
4:35:40
project ID. And this is definitely the a good idea. But I would rather we don't even invoke a background job if we don't
4:35:48
have a project ID because where do we even save this message then right so we
4:35:53
have to think of a different way to improve this but a good suggestion nevertheless
4:35:59
and another suggestion regarding the migration since this is just you know development migration I really don't uh
4:36:06
care about this one since it's not really dangerous for our use case. So, I'm going to merge this pull request.
4:36:13
And that marks the end of this chapter. As always, make sure you go back to your main branch and make sure you click on
4:36:19
synchronize changes. So, you pull that new merge. And once that is done, you can go inside of your source control
4:36:26
button here, go inside of graph, and you should see that we just merged projects.
4:36:31
Amazing. See you in the next chapter.
10 Messages Ui
4:36:36
In this chapter, we're going to develop the messages UI. This will include
4:36:42
creating the project view, the messages container, message card, and the message form components. And for the API
4:36:49
changes, we're going to have to slightly modify the get many procedures of our messages. So before we do that, let's go
4:36:57
ahead and ensure that we are on the main branch. And you can click synchronize changes just to make sure everything is
4:37:02
up to date. And in your source control, your last merge should be 09 projects.
4:37:08
So I'm going to go ahead and go inside of source inside of modules messages
4:37:15
procedures. And in the get menu, let's add the ability to add a project ID. So I'm just
4:37:22
going to copy the input from the below create procedure. And I'm going to add it here. And I'm going to delete the
4:37:28
value because it's not required here. only project ID is required. And once we
4:37:34
have the project ID, we can extend this to add a where. And let's go ahead and
4:37:39
add project ID to be input project ID. Now let's go ahead and actually
4:37:46
dstructure the input from here so we can use it properly. Just like this.
4:37:51
Perfect. So now we can load messages for an individual project. Let's go ahead
4:37:56
and let's do that. So now I'm going to go inside of source app
4:38:02
projects project ID page.tsx and since this is a server component
4:38:09
what we are going to do is we're going to leverage prefetching. So I'm going to go ahead and do const query client
4:38:18
and I will do await get query client from the RPC server and this is not a
4:38:26
promise. So we don't need a weight here. You can usually see that if you type an
4:38:32
await on something that does not need a weight, you will see little three dots
4:38:38
here which will tell you that it has no effect on this. But you can also see that when hovering on something, you
4:38:43
will see that there is no promise wrapping this. For example, when I hover over params, you can see that there's a
4:38:50
promise of wrapping this. So a weight makes sense, right? in here. Nothing would happen if I used await, but we
4:38:57
don't have to use await. And let's now add a void TRPC, which you can import
4:39:03
from the TRPC server. Same same as get query client. And let's go ahead and
4:39:08
actually do void query client. Prefetch query tRPC
4:39:14
dot messages get many query options and pass in the project ID which we
4:39:22
structure from right here. Perfect. So now what I want to do is I
4:39:27
also want to add inside of my modules projects server procedures
4:39:33
I want to add a get one
4:39:38
like this and I want to add an input here and I want to call this ID ZR
4:39:47
with a minimum value of one and a message ID is required.
4:39:53
So should you call this ID or should you call this uh project ID? Well, since
4:40:00
this is regarding fetching a single project, in my opinion, it is kind of redundant to call the property project
4:40:07
ID here. Uh and let me just see what I did incorrectly here. So this is not how
4:40:12
you open this. You should add Z.Object and then wrap this in parenthesis like
4:40:18
this. This is the input. And then in here you can go ahead and import uh
4:40:24
extract this input and you would find existing project here to be await prisma
4:40:30
project find unique like this and you would just do where
4:40:40
ID is equal to input ID and then go ahead and return the
4:40:46
existing project and you can add if there is no existing project throw new TRPC error which you can import from
4:40:54
TRPC server and the cool thing about this is that you have strictly typed
4:41:00
codes. So in this case this would be not found and then we can specify our
4:41:05
message which can be project not found. Great. So now we have a procedure to
4:41:12
fetch an individual project by its unique ID. So we can leverage the find
4:41:17
unique which uses the index ID. Now let's go back inside of the page
4:41:23
here and let's also prefetch for that. So TRPC projects get one and instead of
4:41:31
ID uh instead of project ID we are using the ID field because just think of it
4:41:37
when we are fetching messages it makes sense that the prop is project ID because it's referring to an entirely
4:41:44
new entity. But when we are fetching projects, we already know that ID is referring to the project ID. That's why
4:41:51
in my case, it makes no sense to call this project ID. We already know it's a
4:41:57
project. At least that's kind of my idea of naming a convention here. In here, basically, we are doing this just in
4:42:03
case you were confused. But yeah, you can do a shorthand operator if the key and the value are named the same. So now
4:42:11
we are prefetching these two which means that we can now create our project view component. So I'm going to do that by
4:42:18
going inside of modules projects and I will create a new folder called UI.
4:42:25
And inside of here I will create views.
4:42:30
And then inside of here I will create project- view.tsx.
4:42:36
And I will mark this as use client. And I will export const project view.
4:42:42
And in here I will create an interface props project ID. And I will call this a
4:42:49
string. In here you could also technically use ID since we know what
4:42:55
it's referring to but I originally built the project using this. So I just don't want to alter the source code.
4:43:03
And now in here we are going to rely on getting the data from use suspense query
4:43:09
and from using const tpc usepc
4:43:15
like this trpc dot projects
4:43:20
and here I have it get one query options and
4:43:25
pass in the ID to be project ID and let's go ahead and remap this to project. Then let's copy this and let's
4:43:33
change this to messages get many and this will use the project id key and we
4:43:40
are going to remap this to messages and now in here we can return a div
4:43:46
project JSON stringify project and then below JSON stringify messages null too
4:43:57
just like that just make sure you've marked this as use client And now inside of the page here what you
4:44:03
can do is you can change this to be hydration boundary which you can import from tanstack react query. You can pass
4:44:10
the state here to be dehydrate again from tanstack react query and simply
4:44:16
pass in the query client. Then inside of here render the project
4:44:21
view component and pass in the project ID to be project ID. Just like that. And
4:44:28
there actually is another reason why I don't want to use ID here. Simply because ID is reserved for u HTML
4:44:36
elements, right? You often see things like form ID and then something. So
4:44:42
because of that, I want to explicitly use project ID here. And let's go ahead and wrap this inside of suspense, which
4:44:49
you can import from React. And let's give it a fall back
4:44:55
of loading like this. There we go.
4:45:01
Perfect. So now if you have your app running and
4:45:06
if you go to localhost 3000 and if you create a new project here,
4:45:12
build a yellow landing page and click submit.
4:45:18
The project ID was just loading for a second. And as you can see the first thing we have is for me it's freezing
4:45:25
tent that's the random name that we generated and then immediately below that I mean after that we can see an
4:45:31
array of messages. The first one is build a yellow landing page by the user and in a couple of seconds we will get
4:45:38
another message which will basically be the response. And here we have it the task summary. It created a landing page
4:45:44
blah blah blah. Perfect. So this works just fine and it leverages pre-fetching in the server components. Just be
4:45:51
careful that your query options are exactly the same in the prefetch as they are in the use suspense query. So they
4:45:57
need to be identical. So make sure you didn't accidentally mess them up.
4:46:03
Now I'm going to add some resizable panels inside of this project view. You already have this installed when we
4:46:09
added all Shatsen components. So you can import all of these from components UI
4:46:16
resizable. So you can control-click to confirm that you have it. It is inside of source components UI resizable. And
4:46:24
now let's go ahead and actually build uh our resizable panels. So I'm going to
4:46:29
give this div here a class name of height screen. I'm then going to add a
4:46:34
resizable not handle panel group. And I'm going to wrap these two elements
4:46:41
inside. I will give this a direction of
4:46:46
horizontal and I will then add a resizable panel.
4:46:53
And let's go ahead and wrap the project in one resizable panel and then another
4:46:59
one for the messages like this. Let's go ahead and give this one a default. Let's
4:47:05
actually collapse this. Default size will be 35. Minimum size will be 20. And
4:47:12
let's give it a class name of flex flex column and the minimum height of zero.
4:47:18
And now let's go ahead uh and let's do the following. In between these two
4:47:23
resizable panels add a resizable handle and add width handle
4:47:30
like this. And for this resizable panel, give it a default size of 65 and a
4:47:39
minimum size of 50 like this. So now you
4:47:45
should have this type of resizable panel and you can already see how this is going to look. In here we're going to have our messages and in here we will
4:47:52
have the project preview. Right now it is the opposite but you know it's I just wanted to use it as an example. So
4:47:58
that's how we're going to do that. And by default, you can see it has what I think is a kind of fair ratio. This size
4:48:05
for messages, this side for the preview. You can of course change the default size to whatever you like. Uh but you
4:48:13
know just make uh the the the total number of these two panels needs to add up to 100. So you know just make sure
4:48:19
you are using the proper calculations. Great. So now that we have this, let's go ahead and let's develop this side of
4:48:27
the resizable panel. So I'm just going to change this to be to-do preview.
4:48:33
And this here will be our messages container.
4:48:40
So right now we have an error because messages container does not exist yet. So now let's go ahead and do the
4:48:46
following. I'm going to still stay inside of projects, inside of UI, and I
4:48:52
will create components. Now, you're probably wondering why am I creating a
4:48:57
message container, messages container.tsx inside of the projects module when I
4:49:03
clearly have the messages module right here. Well, it's not the name that
4:49:10
decides where you put something in module-based architecture. It is its purpose. And this specific messages
4:49:17
container purpose will only be used inside of the project ID page. Right? So
4:49:24
this project's project ID page is obviously the project module. So just
4:49:29
because we are rendering a component called messages here messages container doesn't mean that it belongs in the
4:49:36
message uh module, right? but something that's re reusable like the message API
4:49:43
that belongs in the message uh module but messages container is just a
4:49:48
container to render messages in the project so that's why this is the place
4:49:54
I'm putting it in the name doesn't matter I can call this project message
4:49:59
container maybe that would be uh a bit more visually attractive but just to
4:50:05
explain why I'm putting that here now let's go ahead and let's build the messages container. So we are actually
4:50:12
going to do the following messages container and then I'm going to copy a couple of
4:50:19
things specifically this because this is where I will load the messages. If you
4:50:25
can, it will it will always be better to load the messages to use it to use use
4:50:30
suspense query in a deeper component because the deeper component you use it
4:50:35
in uh the the faster the page will load and I'm going to show you why in a
4:50:42
second. So let's call this use TRPC from TRPC client like this. And in here we
4:50:49
need an interface which I can just copy from the project view here.
4:50:54
And let's go ahead and destructure the props and get the project ID like this.
4:51:00
And now we have the messages here. So let's just return a div with JSON.stringify
4:51:07
messages. There we go. And now we can import the messages container here from components
4:51:16
messages container. And we can remove the suspense query for messages like
4:51:21
this. and pass in the project ID here to be project ID. And now what's important
4:51:28
is that you wrap this inside of suspense as well and give this a fallback of
4:51:36
loading messages like this. So now the cool thing that's
4:51:43
happening I don't know if you will now see this and yes uh yeah so let me try
4:51:49
and demonstrate. Yeah, it's kind of hard uh to do right
4:51:54
now perhaps because I don't need this. What if I comment this out? Yes, you can
4:51:59
see that when you comment this out in the project view, the page loads much quicker. That is because if we are using
4:52:07
a use suspense query inside of the project view, then it means that this suspense will fire and that blocks the
4:52:15
entire page. You can see that while that big loading is active, let me just write loading project.
4:52:22
So while this loading project text is visible, the entire page is blocked. But
4:52:28
if you move the suspense in an deeper cont uh component like the message container like we just did with loading
4:52:35
the messages here and wrap that inside of suspense. So let me now simulate by commenting this out. You can see that we
4:52:43
are not blocking the entire view only the messages view. So that's why I told
4:52:49
you that it will be faster. It's not really faster. It is just visually faster. So we are going to do the same
4:52:55
thing for loading the project. So yes, for now we can actually remove this because we will not be loading the
4:53:01
project uh inside of the project view. Let me just move the suspense right
4:53:07
here. Perfect. So now let's go inside of the message container and let's develop it.
4:53:14
I'm going to start by giving the most outer div a class name of flex flex
4:53:19
column flex one and a minimum height of zero. I'm then going to add another div
4:53:26
with a class name flex one minimum height of zero and overflow y auto. And
4:53:32
then inside of here another div with a class name padding top padding top two
4:53:39
and padding right of one. And then finally inside of here I will go over my messages. I will get the individual
4:53:46
message here and I will render a new component. So in here we're going to
4:53:52
render message card component and you can remove the JSON stringify here. Now
4:53:57
let's give this a key of message do ID. Let's give it content of message.content
4:54:04
roll of message roll fragment of message
4:54:09
fragment. And now we have a problem. Fragment is not loaded here. So let's go ahead and fix that by going inside of
4:54:16
messages get many procedure. It's inside of uh modules messages server procedures. And simply do what we did in
4:54:23
the previous chapter. Add include. Make sure you're doing this instead of get many. add include fragment true like
4:54:32
this. And now let's go back inside of the messages container here. And as you can
4:54:38
see now we no longer have that problem. Right? So now message fragment exists.
4:54:44
Let's add created at here to be message.created at
4:54:49
just is active fragment for now to be hardcoded to false. on fragment click
4:54:57
will be an empty arrow function and the type will be message.ype.
4:55:03
Now let's go ahead inside of the components and create the message card. Again we are doing this inside of the
4:55:10
projects module because even though these components are called message they relate more to the product to the
4:55:17
project entity than they do to the message entity. And inside of the message card component, we are now uh
4:55:23
going to do this the uh the following. First, let's create the props content
4:55:29
which is a string roll which is a type of message roll. You can import from at
4:55:34
generated Prisma. So this is the generated folder of Prisma which you can find in your source folder. And you can
4:55:41
see that you don't really touch this folder, right? You don't modify this folder because it is automatically
4:55:48
generated every time you do npx prisma generate or npx prisma migrate dev which
4:55:55
in background runs npx prisma generate right you can always do npx prisma
4:56:01
generate yourself this will simply update the entire prisma right so in
4:56:06
case yours didn't exist now it will exist so message ro was directly
4:56:12
generated from our schema message role. So if yours is called something else,
4:56:18
you're going to have to import something else. Same thing for fragment from message here. And same thing for message
4:56:24
type. So basically content ro fragment which can be null created at is active
4:56:31
fragment which is a boolean on fragment click which accepts the fragment as the value and type which is a message type.
4:56:37
Now, let's go ahead and let's export the message card here and let's assign all
4:56:43
of those props from above and let's dstructure them all here.
4:56:49
Perfect. Now, inside of this, let's go ahead and do the following. If roll is
4:56:54
equal to assistant, we're going to return a paragraph assistant.
4:57:01
Otherwise, we are going to return a paragraph user. And let me just fix my
4:57:08
uh typo here. So we have this uh I don't think I need this. There we go.
4:57:15
Like this. And it's okay that all of these things are unused. Now let's go back to the messages container and import message card from dot / message
4:57:23
card. Let me just separate my imports here. No need for use client in this component simply because the uh project
4:57:31
view where it's rendered is already use client. So its children will be as well.
4:57:37
And as you can see I have two messages. The first one is from the assistant and the other one is from the user. And I
4:57:44
think that in this case we would actually need the opposite to happen. So let's go inside of the messages
4:57:50
container. Go inside of messages get many and change the order by to be ascending. So the first one should be
4:57:57
from the user and the second one should be from the assistant. All right. Now, let's go inside of the message card and
4:58:04
let's actually develop this. So, let's do the user one first because I believe it is a little bit easier. So, we're
4:58:10
going to do user message here and it will have one prop which is content. So,
4:58:17
let's pass in content here. And we're going to develop this uh just above this
4:58:24
con user message. And let's create an interface uses me
4:58:30
user message props like this. And then just extract the props here. It's just
4:58:36
content. And in here return a div with a class name flex justify and padding
4:58:43
bottom of four PR of 2 PL of 10. And in here add a card from components UI card.
4:58:52
You already have this as well. It comes with chat UI. You can find it in source
4:58:57
components UI card. Now inside of the card render the content and give the
4:59:04
card a class name of rounded large background muted padding three shadow
4:59:11
none border none maximum width of 80% and break words
4:59:19
like this. So the user message will be rendered every time the user sends a
4:59:26
message and we should be able to see that now. Build a yellow landing page. That was my first message and you can
4:59:32
see how my message is moved into this corner. We are now going to render the assistant output. So in order to do that
4:59:40
we will render the assistant message like this.
4:59:48
assistant message and the assistant will have uh some different props. So we're
4:59:56
going to pass the content to be content fragment to be fragment.
5:00:01
It will have created at it will have is active fragment
5:00:09
and it will have on fragment click and it will have a type. Basically all
5:00:16
the other props are related to the assistant message. So now let's go uh
5:00:22
below the user message. Let's create an interface assistant message. And in here
5:00:28
we can just add all of those props. Content fragment which can be a type of fragment or null created at which is
5:00:34
date is active fragment which is boolean on fragment click and type. I'm not sure
5:00:40
but maybe these are identical to message card props. Uh it doesn't have roll. So yeah, one
5:00:46
less prop. I'm not sure if this is the best way to do this, but you know, I think it's fine. Now, let's go ahead and
5:00:52
actually do const assistant message like this. Let's destructure assistant
5:01:00
message props. Oops. Yeah, I should call this props. Yes, like this. And then inside, let's
5:01:07
just add all of those things. Content fragment created at is active on
5:01:13
fragment. Click enter and type. And inside of here, we are going to do
5:01:18
the following. Let's add a div with a dynamic class name, which means open curly brackets and import CN from lib
5:01:26
utils. If you don't remember this, but we got this when we installed shot cnui.
5:01:31
And I told you we are going to use this when we need some dynamic classes and this is the first time we need that. So
5:01:38
the way you use this library is very simple. You open it up as a function. It can accept an infinite number of
5:01:44
parameters. So the first parameter, the second parameter, the third, infinite
5:01:49
number. What I like to do is I like to reserve the first one for my static class names.
5:01:56
So flex flex column group ex 2 and padding bottom of four. And then in the
5:02:03
second argument, I like to do dynamic ones. If type is equal to error, I'm
5:02:09
going to render it differently. I'm going to render text red 700 and on dark
5:02:16
mode text red 500 like this. And then inside of here I'm going to add a div
5:02:23
with a class name of flex item center gap 2 pl 2
5:02:30
and margin bottom of two. Now I'm going to add to-do add logo because we don't
5:02:36
have it yet. And I'm going to add an image component here. Uh actually we can
5:02:41
do that only when we have the logo. So let's add a span for now and our app name. In my case this will be Mine text
5:02:49
small and font medium like this. Then copy this span and in
5:02:56
here you're going to need to install npm install date fns. This will be used to
5:03:03
parse dates. And let me show you my package json date fns 4.1.0. zero.
5:03:10
And I'm going to import something from date FNS. So import format
5:03:18
from date FNS like this. And inside of here, I'm going to format
5:03:26
created at like this. And I will format in this format
5:03:37
like this. And then I'm going to slightly modify this to be text extra small and text
5:03:45
muted foreground. And then then I'm going to give it an opacity of zero. And
5:03:51
I'm going to give it transition opacity. And since I have given this outer parent
5:03:58
div a group class name, I can leverage that by doing the following. I can do
5:04:04
group colon my apologies group dash hover. So when the group is hovered,
5:04:10
change the opacity to 100 like this. And that's how I'm going to make this appear
5:04:17
when we hover on the parent element. Perfect. And then outside of this div,
5:04:24
let's go ahead and let's actually render the content. So div class name pl 8.5
5:04:31
flex plex column and gap y of four. And inside of here, a span with content
5:04:38
inside. And let's go ahead and make sure we are using the assistant message. We are perfect. And there we go. You can
5:04:45
see build a yellow landing page. And then Mine answers at this time which only appears when I hover
5:04:52
with a task summary like this. Perfect. So now let's go ahead and continue uh
5:05:00
developing this uh and let me just see.
5:05:05
So in here we have flex item center gap 2 PL2 margin bottom of two. Okay. I
5:05:13
think I think this is okay. I am just this this spacing seems a little bit odd. I'm
5:05:21
not sure this is how it's supposed to be. But yeah, go ahead and try and collapse your page a bit. It should work
5:05:26
fine. It should normally break words. It shouldn't add any scroll bars except the
5:05:32
the the one from up down, right? That one should appear, but no one on the x-axis should not happen. Uh great. So
5:05:40
now let's go ahead and let's obtain our app logo. So head to the assets page. You can see
5:05:47
the link on the screen or you can use the link in the description. And in here you can find logo.svg.
5:05:54
I found this logo from logo Ipsum. So these are amazing placeholder logos you
5:06:00
can use for your projects. Uh and I use them in pretty much every project. They are amazing. So I slightly modify them
5:06:08
to match the color scheme of the project. You can download them or you can copy the SVG since the code is in
5:06:14
SVG and you can then go inside of your project and what I like to do is go inside of public create a new logo. SVG
5:06:22
here and then I click this open file using VS Code standard text binary and I
5:06:29
paste it inside and save it and that creates the logo or you can just download it as a file normally without
5:06:35
all that trouble. So now let's go ahead and let's add our logo to our message
5:06:41
card. Specifically in the assistant message, I added a to-do here. Now let's add an image here from next image. So
5:06:49
make sure you have added this import here. And then we're going to add the
5:06:54
following. Source will be forward/lo.svg. Alt will be Mine. Width will be 18.
5:07:04
Height will be 18. and class name will be shrink
5:07:09
zero. And let's go ahead and try again. And there we go. So now this space makes
5:07:14
more sense because the logo perfectly pushes the text to be aligned with the
5:07:20
content right here. Amazing. And don't worry about this task summary tag. We
5:07:25
will get rid of that later uh using something else. But this is basically how our chat will look like. And if
5:07:32
you're wondering, the colors don't look exactly as your demo, don't worry. We're going to change the entire theme of the
5:07:38
project later. But this is what I wanted to achieve. So now what I want to do is
5:07:44
I also want to add a little uh message on the bottom here. I mean a little form
5:07:51
on the bottom. Uh but just before I do that, I also want to create a fragment
5:07:57
component. So after we render the span content, let's check if we have the
5:08:02
fragment and if type is equal to result only then are we going to render the
5:08:09
fragment card. The fragment card will accept three props. The fragment itself
5:08:16
is active fragment and on fragment click. And we can create the fragment
5:08:23
just above here. So first the props fragment card props fragment is active
5:08:31
fragment and on fragment click and then the fragment card component. So let's
5:08:37
just use the props and extract them here. And then inside of here we're going to
5:08:43
return a button but a normal HTML button like this. We're going to give it a
5:08:50
dynamic class name using the CN library. In the first argument I will add flex
5:08:57
items start text start gap two border
5:09:04
rounded large background muted width fit
5:09:10
padding three hover bg secondary and
5:09:16
transition colors and then I'm going to check if is active
5:09:21
fragment And I will do the following background primary text primary
5:09:29
foreground border primary and hover bg
5:09:34
primary like this. And on click here I will call on fragment click and pass the
5:09:41
fragment as the prop. Inside of the button itself I will add
5:09:46
code to icon. So from lucid react, let me just fix
5:09:54
this uh invalid fragment end here. I don't need this. There we go. The code
5:10:00
to icon will have a class name of size four and margin top of.5.
5:10:08
I will then open a div with a class name flex, flex column and flex one. And
5:10:15
inside of here I will have a span which will render the fragment title. and the class name text small font
5:10:23
medium and line clamp one. Below this another span with a class name of text
5:10:31
small and the text preview. I think we should already start to see
5:10:38
this because this message from the AI assistant has the fragment and it is not
5:10:43
an error. So we can see it right here. Make sure that you are doing this on a
5:10:48
successful response. So you have the fragment generated in your database. If you are unsure, if you still can't see
5:10:54
it, npx Prisma studio to show you what I'm talking about. So your message,
5:11:00
whatever one you're doing should have a fragment. You can see how
5:11:05
some of my messages don't have fragments because they are by user or they are errors. But the ones that are successful
5:11:12
have a fragment, right? So that's what you need to do. You basically need to create uh a background job with a
5:11:18
successful generation, something that has a fragment. So now after the preview
5:11:24
here, outside of this div, I'm going to add another div with a chevron write
5:11:30
icon from lucid react with a class name of size 4. So the same import place as
5:11:37
code to icon. And let's go ahead and give this a class name. flex items
5:11:43
center justify center and margin top of 0.5.
5:11:49
And I think that marks the end of the message card component. I think we have everything we need. Now the only thing I
5:11:56
don't like is that this doesn't have the pointer cursor. It doesn't look
5:12:01
clickable. But you don't have to fix that by adding the pointer to uh this
5:12:07
because this is already a button. So what we're going to do is we are going to change the global CSS so that it
5:12:13
shows the pointer when this is hovered like this. I mean not this one but you
5:12:18
you get the idea right. Perfect. So now what we can do is we can create the form
5:12:24
here at the bottom and that will uh complete the message container.
5:12:29
So let's go ahead and go inside of the components and let's create the message
5:12:35
dash form.tsx. So this will be rendered at the bottom
5:12:42
of the message container. Let's go ahead and just copy the props from the
5:12:48
previous components and let's export message form
5:12:55
inside of here. Go ahead and assign the props and destructure the project ID and
5:13:01
return a div message form. And now let's go inside of the messages container. And
5:13:08
now we have to render this. So I'm going to render it uh after the last div here.
5:13:14
I'm going to open a new one with a class name relative padding 3 pt1.
5:13:21
And then I'm going to add message form and I'm going to pass in the project ID.
5:13:28
Project ID like this. So make sure you have added this import. And now at the bottom you
5:13:34
will see message form. In order to complete the message form
5:13:40
component, we're going to have to install a new package
5:13:45
react text area autosize. So go ahead and install this. And I'm going to show
5:13:51
you the version. So, package JSON 8.5.9.
5:13:57
That is my version. And now, let's go inside of the message form. And we're going to need a couple of things from
5:14:04
React hook form. So, use form. And then, we're going to need Zod resolver from
5:14:10
hook form resolvers zod. And if you're worried where do these packages come from, we already have them. cook form
5:14:18
and form react cook form. So all of this already exist and they came with chatnui
5:14:25
when we added all components and the new one is this one text area auto size from
5:14:31
react text area auto size and besides this let's just see uh what else
5:14:40
do we need let's also add use state from react like this let's also add zod
5:14:50
and let's add post from sonner and let's also add some icons. So that's going to
5:14:56
be arrow up icon and loader two icon from lucid react and from tanstack query
5:15:01
we need use mutation use query and use query client from tanstack react query
5:15:07
then let's add cn from lib utils use trpc from at tpc client the button
5:15:15
component and form and form field from components UI form this is another shhatsenui
5:15:22
component and when you installed that which you did using the d-all command.
5:15:28
You also got use form and you got the zod resolver and also zod. And that is
5:15:34
it for now. So now let's define form schema here to be z.object. And
5:15:43
what you should actually do is you should visit one of your procedures in messages specifically find the create
5:15:50
procedure and you should copy the value from here. So you have the limit right?
5:15:57
So like this. Now how you're going to call this value
5:16:03
string um I really don't know. So you can do value you can do content whatever you want. And let's go ahead and do the
5:16:10
following now that we have this form schema. Con form use form pass in
5:16:16
Z.infer infer type of form schema like this and add resolver here to be zod
5:16:24
resolver and pass in the form schema object and the default values will set
5:16:29
the value to be an empty string by default. Great. Now that we have the form, let's
5:16:35
build the UI. So the outer div will be the form element from here from
5:16:42
components UI form and we have to pass the entire object that we created here
5:16:49
using use form and then inside we need a native HTML form element like this and
5:16:57
in here we need the following. We need onsubmit to be form handle submit and
5:17:03
then we have to create a custom submit form. So const onsubmit here we'll
5:17:10
accept the values which are basically this. So you can copy this from above
5:17:16
and for now just console log the values. The reason we are doing this infer is
5:17:22
because when you hover over you can see that it is exactly what you define here.
5:17:27
So now use that onsubmit and pass it here. So now this onsubmit will only
5:17:33
trigger this which will actually initialize the network call when the validation passes. So that's why we are
5:17:40
wrapping it inside of here. Perfect. And now let's go ahead and do a class name
5:17:46
here. CN relative border
5:17:53
padding four padding top one rounded extra large background sidebar dark bg
5:18:01
sidebar and transition all like this and then if is focused
5:18:09
which doesn't exist yet we were going to do shadow extra small and for show usage
5:18:16
we are going to do a rounded top none. So now let's go ahead and just quickly
5:18:21
uh fix these things. So for is focused it is an easy fix. All we are going to do is add a new use state here with is
5:18:29
focused and set is focused with the default value of false from use state react. And for the show usage I'm going
5:18:38
to manually set it to false for now. So now you should have no errors here. And
5:18:45
periodically you can check on this just to see how it looks. Great. Now that we have this, let's go ahead and add the
5:18:52
form field component which is a self-closing tag. Just make sure you have imported it. Give this a control of
5:19:01
form. Give it a name of content and give it a
5:19:06
render of field like this. And inside use the text area
5:19:12
auto size self-closing component. In here you can immediately spread everything you have from the field
5:19:18
above. And then go ahead and give it the following and give it an onfocus and on
5:19:24
blur to modify the set is focused state like this. And the name should be value.
5:19:31
My apologies. So already when you hover over this, I'm not sure if you can notice, but that's there's an ever so
5:19:38
slight shadow change to the entire object. Now we have to fix this so it
5:19:43
doesn't look so weird. So let's go ahead and give this a minimum rows of two and
5:19:49
a maximum rows of eight. And then a class name. Adding top four bore. Resize
5:19:56
none. Border none. Width full. Outline
5:20:02
none. Background transparent. And a placeholder of what would you like
5:20:09
to build? And then let's go ahead and do
5:20:14
on key down. get the event and check if event key is
5:20:20
equal to enter and open parenthesis. We are also
5:20:26
holding control key or meta key. So this
5:20:31
will basically be control enter. We prevent the default and we do form
5:20:37
handle submit onsubmit oops onsubmit and pass the event as
5:20:43
well. So the onsubmit is this just like that. So now uh outside of
5:20:52
this which is form field I believe. Yes outside of form field but still inside
5:20:58
of the form let's go ahead and do the following. Let's add a div
5:21:04
with a class name flex gap x2 items end
5:21:10
justify between padding top of two. Then another div with a class name text
5:21:18
10 pixels text muted foreground and font
5:21:24
mono. And just write test here simply so you see where that is. So it's right
5:21:29
here at the bottom. So this will now be the following. It will be a uh keyboard
5:21:36
sign. I think this is for keyboard. The the short name for keyboard. Uh render a
5:21:42
span inside and render the following sign like this and then enter. And that will
5:21:51
turn uh like this. The command sign and enter.
5:21:57
Now let's style it. The class name will be ML auto pointer events none inline flex height five
5:22:07
select none items center gap one rounded
5:22:13
just rounded border background color muted px 1.5 font mono text 10 pixels
5:22:24
font medium and text muted foreground ground and then let's go ahead outside
5:22:31
of the KBD and let's do NBSP
5:22:36
to submit. So basically command enter to submit. We
5:22:42
are telling the user how to submit. And now outside of this div add a button
5:22:48
element. And this button element will do the following. It will render arrow up icon which we already have imported from
5:22:56
Lucid React. There we go. And now we're going to style it. Give it a class name
5:23:04
of CN size 8 and rounded full like this.
5:23:12
There we go. This is how it's going to look like. And now we need to add some dynamic things here. So let's start by
5:23:20
adding our create message mutation. So we need to add PRPC here. Use PRPC.
5:23:31
And then we need to add create message from use
5:23:36
mutation ERPC messages create mutation options
5:23:42
like this. And then you can extract the following.
5:23:47
You can then extract const is pending to be create message is
5:23:55
pending. Const is disabled to be is pending or if not form form
5:24:05
state is valid. So if form state is not valid like this. And let me actually
5:24:12
move these two to the bottom here simply so I have all of these things in one place.
5:24:20
And now that we have the create message mutation, let's go inside of the onsubmit and let's make it an
5:24:25
asynchronous method. And let's do await create message dot mutate async and pass
5:24:33
in the value to be data. Actually this is values. So values do value and the
5:24:42
project ID like that. Perfect. And now let's use the is pending and let's use
5:24:49
uh the is is disabled. So first things first to the text area auto size
5:24:56
disabled if is pending like that. And then let's go ahead down
5:25:04
to this button. And the button will be a little bit different. So this one will be disabled if is disabled. So be
5:25:11
careful for the text area auto size. We only disabled if it's pending. So only
5:25:17
if the network request is pending. But disabled will be for this. So you can do is button disabled
5:25:25
just to don't so you don't make a mistake. There we go. Uh and let's also do if is button disabled background
5:25:33
muted foreground and border like this. And then inside of here a turnary if is
5:25:39
pending. In that case we are rendering the loader two icon which we already have imported with a class name of size
5:25:47
four and animate spin. Otherwise we render the arrow up icon like this.
5:25:55
There we go. So now make sure that you you know restart your server here.
5:26:01
Actually I will restart the entire project as well. So, npm rundev, npx inestdev.
5:26:08
I will refresh this page here and I'm going to add build a blue landing page
5:26:15
and I will press command enter. And there we go. You can see that that has submitted this for a second. It was
5:26:21
loading. We still have to do the cleanup function. But if I look in my inest developer server, you can see that this
5:26:28
is successfully running. Amazing. And if I refresh here, I should actually see my
5:26:34
new message here. Build a blue landing page. Perfect. So now let's go ahead and just add some onsuccess things to happen
5:26:41
in the mutation options of the create message. Right. So what should happen after we submit? So the first thing that
5:26:47
should happen is on success here once we get the data of this new message. Let's
5:26:53
go ahead and let's first do form.reset like this. So make sure that form is initialized above and then let's do
5:27:01
query client which uh I'm not sure do we have it we don't. So let's let me just
5:27:06
add const query client to be use query client. So you have this imported from tanstack
5:27:14
react query. So in here what you're going to do is queryclient.invalidate
5:27:20
invalidate queries and then pass in TRPC messages get many query options
5:27:28
project ID data project ID or you can
5:27:33
use the project ID from here yeah maybe that's even easier to do and then you can use the shorthand operator
5:27:41
that's the first thing we are going to invalidate then the second thing uh we don't have
5:27:47
yet so I will add a to-do reinvalidate or invalidate uh usage status. We don't have this yet,
5:27:54
but we will have it later. And now add on error here. Get the error
5:28:01
and do toast dot error error dossage.
5:28:08
And I will add a to-do redirect to pricing page
5:28:15
if specific error. There we go. And the only thing I don't
5:28:22
have left here is the use query. And I will remove it for now because we don't really have the entity we need to call.
5:28:31
And I think that for now this is it. I think for now this is everything. uh we
5:28:38
can do here and there we go we have a response now created a fully responsive production quality blue themed landing
5:28:44
page perfect so now what I want to do is just to end this chapter one more thing here I don't like how uh the first thing
5:28:54
is when I load the page you can see I have to scroll all the way down and the
5:28:59
second thing is when I scroll the text visibly clips here you can see how it's cut so let's fix those two things and
5:29:06
let's end the chapter. Both of these things will be in the messages container. So, make sure that you have
5:29:12
some messages and you can zoom in a little so you have the scroll bar like I do.
5:29:19
The first thing will be a very simple self-closing div just above the place where we render the message form inside
5:29:25
of this relative div. and give it a class name of absolute
5:29:30
minus top minus 6, left 0, right zero,
5:29:37
height of six, background gradient to bottom
5:29:43
from transparent to oops to dash background forward
5:29:49
slash70 pointer events none. What this will do
5:29:55
is it will create an ever so slightly white shadow. I'm not sure if you can see it, but it kind of melts the the
5:30:03
overflow so it doesn't look as obvious that the text is clipping here. If you want to, you can improve this and change
5:30:11
this to two background. And then you can see you can't you can't see the clipping at all. It's like it fades into some
5:30:18
kind of fog, right? So just a slight effect to make this look better.
5:30:23
So it doesn't clip. Now let's do the thing that when we load we scroll to the bottom here. So in order to do that we
5:30:32
first have to add a bottom ref. So let's do that here. const bottom ref will be
5:30:38
use ref from react with a default value of null and the type of HTML div element
5:30:46
like this. Let me just move this to the top like that.
5:30:52
And then what we are going to do is we are going to change this to be use
5:31:01
effect
5:31:07
which you can import from react
5:31:12
and let's first do the following const last system or let's do last assistant
5:31:18
message and do data Find last. My apologies. Messages. Find last.
5:31:27
Search through the messages and find the message whose role is assistant. And
5:31:34
that's how we are going to find the last message that the assistant sends. So make sure you're using the find last API
5:31:40
here. And if we are able to find this last assistant message, what we are
5:31:46
going to do first is we are going to set the fragment uh to that assistant
5:31:52
message. Now we don't have this yet. So actually I'm not sure if we can do
5:31:58
that. So let me just do to-do uh and let's do set active fragment. Right? So
5:32:05
we're going to do this uh well maybe in this chapter, maybe in the future. I I will see. But let's add messages for now
5:32:12
like this. And then let's go ahead and add another use effect.
5:32:22
And in here we will do messages.length.
5:32:28
And we're going to check if bottom ref question mark scroll into view like
5:32:36
this. And let me just check. I think um that
5:32:44
for now this is okay. If I do a refresh here,
5:32:50
uh looks like it's not working. So So it should be scrolling me to the bottom,
5:32:55
but it is not probably because I never added that. So, let's go ahead outside
5:33:01
of here, add a self-closing div and give it a ref of bottom
5:33:09
ref. So, now when you refresh, there we go. You can see how you scroll down
5:33:15
immediately. Perfect. Um, so now,
5:33:20
um, yes, I think I'm going to end the chapter here simply because it's already been an hour. So we're going to end here
5:33:29
and in the next chapter we're going to wrap this up by adding is active fragment functionality. We're going to
5:33:35
add some loading states while we wait for the response. And we're also going
5:33:40
to add the header here so that we can click the back button to go back to the landing page and so we can uh access
5:33:47
some settings here and see the project name. Great. So, we've already made some
5:33:52
great progress here. And you can add something uh like this if you want to see the error state.
5:34:01
And now you can see how the error state looks like when you send it something that it cannot generate. It will simply
5:34:07
tell you something went wrong and it highlights the red color. Perfect. So, I'm very very satisfied with this. So,
5:34:14
we've done this. We've done this, this, this, and even more than this. Now,
5:34:19
let's go ahead and open a new branch and merge this. So, 10 messages UI. I'm
5:34:26
going to open this. I'm going to create a new branch.
5:34:32
10 messages UI. I'm going to stage all of my changes and I will do 10 messages
5:34:40
UI and I will commit and I will publish the branch. A quick reminder that there
5:34:45
is a free code rabbit extension which you can use to improve your code quality. And now I'm going to go and
5:34:53
open this pull request here. And we're going to review the summary of this
5:34:58
chapter and everything we did. And here we have the code rabbit
5:35:05
summary. We introduced a chat interface for project pages, including a message
5:35:10
list, message input form, and support for assistant and user messages with styled cards.
5:35:17
Added support for displaying message fragments and interactive fragment cards. We implemented a horizontally
5:35:23
resizable panel layout with a dedicated area for future preview features. That is exactly what was the point and goal
5:35:30
of this chapter. And may I say we did a pretty good job because no comments,
5:35:38
only some nitpicking comments like we could save some time by doing project ID
5:35:43
instead of project ID equals project ID. So overall amazing amazing job. In here,
5:35:50
of course, we have an in-depth diagram explaining exactly how everything in
5:35:55
this page happens, including pre-fetching, including invalidation, including refetching, everything.
5:36:03
Amazing, amazing job. I'm going to merge this poll request. Once the poll request
5:36:09
is merged, I'm going to go back inside of my IDE and I will go back to the main
5:36:14
branch. After that, I'm going to synchronize my changes and I will check the source control
5:36:22
and the graph so I can see that I successfully merged chapter 10. That
5:36:28
marks the end of this chapter, I believe. Amazing, amazing job and see you in the next chapter.
11 Project Header
5:36:37
In this chapter, we're going to continue the UI development from the last chapter. We pretty much completed the
5:36:44
messages container at that point, but we do have some things missing like the fragment selection and the loading
5:36:50
state. But after that, we're going to focus on the project header component, which is the component above the
5:36:57
messages container, which will tell us which is the currently active project and the buttons to go back. So, let's go
5:37:04
ahead and first handle the leftovers from the previous chapter. As always,
5:37:10
make sure that you're on your main branch and clicked on synchronize changes just to confirm everything is up
5:37:16
to date. So now what I want to do is I want to go inside of my project view
5:37:21
inside of projects UI views project view. And in here, let's go ahead and
5:37:27
let's introduce an active fragment and set active fragment state
5:37:35
from use state and by default let's set it to null and the type can be a type of
5:37:42
fragment from Prisma or null. So just make sure you added this imports here.
5:37:50
Once you've added that, let's go ahead and let's modify the messages container component to have a few more procs.
5:37:59
Let's add active fragment to be active fragment. And let's add set active
5:38:05
fragment to be set active fragment. Now go inside of the messages container and
5:38:12
let's improve these props. So, I'm going to add the active fragment prop to be
5:38:18
fragment or null. And make sure to import the fragment and add the set
5:38:24
active fragment right here. And then you can extract them in the new props here.
5:38:31
Active fragment and set active fragment. Just like that. And then inside of use
5:38:38
effect here, if we detect the last assistant message, call set active
5:38:43
fragment and set last system message. My
5:38:49
apologies, last assistant message dot fragment inside, but only if we have
5:38:57
last assistant message fragment.
5:39:02
Uh well actually since it's going to be null h
5:39:08
yeah let's go ahead and we can just do this it's okay and call this
5:39:14
there we go. So now one of the fragments will always be selected. What we have to
5:39:19
do now is we have to go to the message card and set the active fragment
5:39:24
question mark ID to be identical to message fragment question mark id and
5:39:31
set active fragment will um on fragment click will call set active fragment and
5:39:38
pass the message fragment inside like this. So now inside of your project here
5:39:46
when you click on a specific fragment it should be highlighted like this.
5:39:52
Perfect. And when you load the page since this is an error right now nothing
5:39:58
is highlighted here. But if you try this again build a landing page for example.
5:40:04
I'm going to wait for a second for this to respond. And you're going to see that then when you refresh it will
5:40:09
automatically select that fragment thanks to this use effect right here which
5:40:16
searches for the last message which role is assistant.
5:40:23
And perhaps we can even improve this by searching for the last assistant message with fragment. And then we can do this
5:40:32
and message.fragment fragment and just turn this into a boolean and then just
5:40:39
do this. So you can see that now when I refresh
5:40:45
this fragment is automatically selected. Perfect. Exactly what we need. So now
5:40:52
that we have that, let's also create a loading state. In order to do that,
5:40:57
let's go outside of the use effect here. Let's create a constant to find the last message. Instead of data, let's use
5:41:05
messages like this. And then we are going to find the last user message. So if if is last
5:41:13
message user. So if last message role is user, it means that we are the one who
5:41:18
sent the message last. So that's going to be the system we are going to rely on for now to display loading. Later we can
5:41:26
improve it more. So let's do this. Let's go just above the bottom riff and let's
5:41:31
do if last message is user add message loading state
5:41:38
like this. Now let's create message loading tsx here and in here this is what we're
5:41:46
going to do. So import image from next image and import use state and use
5:41:55
effect from react. Now in here first define shimmer messages function.
5:42:04
And in here add an array of messages. This can be anything you want. So I'm
5:42:09
going to add thinking, loading, generating, analyzing your request, building your website, crafting components, basically things like that.
5:42:17
And then what I'm going to do is I'm going to create a state for current
5:42:22
message index and set current message index with the initial value of zero.
5:42:27
And then I'm going to create a use effect here like this.
5:42:34
And the use effect will do the following. It will create an interval set interval.
5:42:42
And inside of this interval, every two seconds, I'm going to call set
5:42:48
current message index previous
5:42:53
+ one modulus messages.length
5:42:58
like that. And inside of here, I'm going to add messages.length.
5:43:04
And in the return method here call clear interval and pass the interval constant
5:43:11
like this. And then inside of here you are going to return a div and a span.
5:43:20
And inside render the currently active message
5:43:26
like this. Now give this a span a class name of text base text muted foreground
5:43:34
and animate false and give the outer div a class name of flex items center and a
5:43:42
gap of two like this. And now finally let's export
5:43:47
const message loading. Inside of here, we're going to return a
5:43:53
div with a class name flex flex column group px of two and padding bottom of
5:44:00
four. Then a div of class name flex items center gap 2 pl2 and margin bottom
5:44:10
of two. Then we're going to render an image component with a source of logo
5:44:16
SVG out of our project name, width of
5:44:21
18, height of 18 as well, and a class name of shrink zero. After that, a span
5:44:30
with the name of our project with a class name text small and font medium.
5:44:36
Outside of this div, we're going to open a new one with the class name pl 8.5
5:44:42
flex flex column and get y of four. And inside render the shimmer messages
5:44:50
component and then inside of the messages container here you can import message loading component like this. So
5:45:00
now if you try and do build a yellow landing page
5:45:05
you will see this thinking loading generating analyzing your request. So
5:45:13
something for the user to look at while this generates uh and if you really want
5:45:18
to immediately see the results of this. So right now we have to refresh we have to wait for some kind of refetch. What
5:45:25
you can actually do inside of your messages container is you can add
5:45:32
a refetch interval for example every 5 seconds. So now even without you
5:45:38
refreshing it's going to refetch the messages every 5 seconds. And there we go we get a result. So we can add a
5:45:45
to-do here temporary
5:45:50
live message update like this. But just so you can start showing this to people
5:45:57
so you don't have to refresh your page every time. So yes, now if you take a look at your network request, every 5
5:46:02
seconds there there will be a network for refreshing the messages. But don't
5:46:08
worry, uh since we are using React query, a lot of this will be cached. Great. So now let's go ahead and let's
5:46:16
build a component which will be above this and it will be used to display the
5:46:21
project name and the ability to go back.
5:46:26
So I'm going to go back inside of the project view component and just above
5:46:33
the suspense for loading messages I am going to add project header component.
5:46:40
I'm going to pass project ID to be project ID like this.
5:46:45
And after you've done that, let's go inside of components and let's create project-
5:46:52
header.tsx like this. Now, inside of here, let's go
5:46:58
ahead and add the following imports. Link image used theme from next themes.
5:47:04
So, you already have this inside of your package JSON. This will be used to enable dark mode.
5:47:12
Use suspense query from tanstack react query. Some icons chevron down chevron
5:47:18
left edit sun moon icon. And then let's add use tpc from tRPC client button from
5:47:27
components UI button. And all of these imports from the drop-own menu.
5:47:34
the menu itself, content item, portal, radio group, radio item, separator, sub,
5:47:41
sub subcontent, subt trigger, and menu trigger. All of those things. Now, let's
5:47:47
go ahead and let's create an in interface props here. And let's go ahead and define project header right here.
5:47:57
Now, when we are inside of here, we can add tRPC. use TRPC and we can go ahead
5:48:03
and fetch our project using use suspense query TRPC projects get one query
5:48:09
options ID project ID and now we've done what we did initially right remember we
5:48:16
had the project loading here but now we moved it here so it's time to do the
5:48:21
following first import the project header from docomponents project header and after that wrap it in its own
5:48:28
suspense like this and give it a fallback of loading
5:48:34
project like this. And now that we have this,
5:48:40
let's go ahead and add a header tag right here. Let's give it a class name
5:48:46
of padding 2 flex justify between items center and border bottom.
5:48:55
And let's call it header. And let me just refresh here. Uh, and
5:49:01
looks like it's not showing now. Uh, it is, but it is very small, I believe. So,
5:49:07
let's go ahead. Uh, and let me see.
5:49:12
Let's Oh, my apologies. No, it is not visible. We are not rendering anything. I thought it was just very small, but it
5:49:18
didn't make sense. Make sure to return it. There we go. Now, we can see header in the text.
5:49:25
There we go. Perfect. So now let's go ahead and develop this header even further. So I'm going to add a drop-own
5:49:32
menu here. We have all of these components imported. Now inside of here,
5:49:38
add a drop-own menu trigger and give it an as child property. This will allow it to become
5:49:45
the button which is inside. And then let's give this button a variant of ghost, a size of small, a
5:49:55
class name of focus visible ring zero,
5:50:00
hover bg transparent, hover opacity 75,
5:50:06
transition opacity, and pl2 with an exclamation point at the end. In
5:50:11
Tailwind, this means important. We are basically overriding some classes in
5:50:17
here. You're going to render the image with the source of logo SVG out of the
5:50:24
project name width of 18, height of 18.
5:50:30
Then a span element with the project name, the project name coming from the
5:50:36
query which we just loaded. This will have a class name of text small and font
5:50:42
medium. After that, a chevron down icon.
5:50:48
And there we go. This now becomes a drop-down menu. It doesn't have the uh
5:50:54
proper cursor, but don't worry, we will fix that later. Great. So, now let's go ahead and go
5:51:04
outside of the drop-down menu trigger and let's add drop-down menu content.
5:51:10
And let's give this a side of bottom. Let's give this an align of start.
5:51:17
Let's get the drop-down menu item here.
5:51:23
Let's give it an as child property. Let's make sure we close the drop-own
5:51:28
menu item component. Add a link component here. Give it an href to the root page. Add the chevron
5:51:38
left icon and a span element. Go to dashboard.
5:51:44
And there we go. Now the first item is to go back. Perfect. Now we have a way
5:51:50
to go to the landing page. What I want to do next is I want to
5:51:56
create a drop-own menu separator. So let's do drop-own menu separator here.
5:52:03
There we go. And below that add a drop-own menu sub and then a drop-own
5:52:09
menu subt trigger. Give this a class name of gap 2.
5:52:16
Inside of this trigger, render a sun moon icon. Give this a class name of size 4 and
5:52:23
text muted foreground and then a span with the text
5:52:30
appearance. And now you have a submen here. And now
5:52:36
let's go ahead and go outside of the trigger and add drop-down menu portal.
5:52:44
Inside of the portal, add drop-own menu subcontent.
5:52:51
Inside of subcontent, add drop-down menu radio group.
5:52:58
Give it a value for now uh of light
5:53:04
and on value change of an empty arrow function for now.
5:53:10
Now let's add drop-down menu radio item. Give this a value of light
5:53:18
and render a span light. Now go ahead and copy this two times.
5:53:26
The second one will be dark with the text dark. The third one will be system
5:53:33
with the text system like this.
5:53:38
And now you will have the option to select different themes. In order to
5:53:45
enable this, we first have to go inside of our layout, our main layout in the
5:53:52
app folder next to the root page. Right? So this one with the body and everything
5:53:58
and then in here add to the HTML tag suppress hydration warning and then
5:54:05
inside of body add a theme provider from next themes
5:54:12
and encapsulate the toaster and the children. So just make sure you have
5:54:17
added the import here. Let me just move this up here.
5:54:22
Oops. Looks like I did something incorrectly here.
5:54:28
Let me just do it again. So, I'm going to add theme provider
5:54:33
and encapsulate the children. Now, inside of here, I'm going to give it an attribute class. I'm going to give
5:54:41
it a default theme of system and I'm going to give it the enable system option as well as disable transition on
5:54:49
change. And now let's go inside of project header back. And in here
5:54:57
I'm going to add const set theme and theme from use theme. You have imported
5:55:06
this from next themes. You can remove the edit icon. And now let's go back to
5:55:12
our radio here. Set the value to be theme. Change this to be uh set theme.
5:55:21
And I think that is pretty much it. If you try clicking on dark mode, uh it
5:55:26
should use the dark mode. Try refreshing if it doesn't work. There we go.
5:55:33
Perfect. We now have dark mode. We will of course improve the look of it later,
5:55:38
but pretty impressive so far. Great. So that marks the end of the project header
5:55:45
for now. What we're going to do or start doing in the next chapter will be
5:55:51
previewing the actual fragments and fix any potential issues that we have. This
5:55:57
will also include creating the code editor, right? Amazing job. So, let's go
5:56:03
ahead. I can see that we have some issue here. Every time I select this fragment, very soon the bottom one starts to
5:56:11
select. So, I'm pretty sure that something inside of my messages container uh oh yes, the refetch
5:56:18
interval is probably causing this to uh refetch every time. So, maybe a better
5:56:25
option for now would be to not use it. So, I'm going to comment it out. I will add to-do. This is causing problems.
5:56:34
Yes, it's definitely that refetch interval. So now by default no fragment is selected only you can select it. It's
5:56:41
okay to be like that now. Uh great in the next chapter we are developing this.
5:56:47
So let's go ahead and do what we usually do. Let's mark what we completed
5:56:53
and let's open a new branch project header. So I'm going to open a new branch here.
5:57:01
Create new branch 11 project header. I'm going to stage all of my changes. 11
5:57:10
project header. I'm going to commit and I'm going to publish this branch.
5:57:16
Then I'm going to go ahead and go in my GitHub and I'm going to open a new pull
5:57:21
request so that we can review all the things we did.
5:57:27
And here we have the summary. New features. We added a dynamic project
5:57:32
header with theme switching and navigation options. We also introduced a loading indicator with animated messages
5:57:39
during message processing. We enabled live updates for messages with automatic
5:57:44
refreshing every 5 seconds. We improved message interaction by highlighting and managing active message fragments.
5:57:52
Perfect. That is exactly what we did in this chapter. As always in here, we have
5:57:57
file by file walkthrough. And of course a sequence diagram this time including
5:58:03
the periodically refetching messages which we just added. Amazing. And as for
5:58:08
the comments, we are very good again. No comments except some nitpick comments.
5:58:15
Amazing job. Let's go ahead and let's merge this. And after you have merged it, go back to your project, change to
5:58:23
the main branch, and make sure to synchronize your changes. After you have synchronized your changes, as always,
5:58:29
you can click on the source control graph and confirm that you have just merged chapter 11. And I believe that
5:58:36
marks the end of this chapter. Amazing, amazing job. And see you in the next one.
12 Fragment View
5:58:43
In this chapter, we're going to focus on creating the fragment view component.
5:58:48
And this entire chapter is pretty straightforward. We just have to create an ability to view that E2B sandbox URL.
5:58:58
So, let's go ahead and do that. As always, ensure that you're on your main
5:59:03
branch and synchronize changes to make sure everything is up to date. The last chapter was chapter 11. So, now let's go
5:59:11
ahead inside of source and basically just find project view. There we go.
5:59:18
Inside of this project view, go inside of your second resizable panel and in
5:59:23
here render the fragment web component. We are only going to render this if we
5:59:30
have an active fragment. So if you have an active fragment only, then render the
5:59:35
fragment web and pass in the data to be active fragment. As simple as that. And
5:59:41
you can turn this into a boolean like this. Perfect. Now let's go ahead and
5:59:48
let's go inside of components fragment web.tsx.
5:59:55
Now in here let's create an interface props with fragment from generated
6:00:01
Prisma. Now let's go ahead and let's add a couple of more things. Use state from
6:00:06
react external link icon and refresh CCW icon. And then we're going to use the
6:00:14
button component from components UI button. Now in here let's go ahead and
6:00:20
export function fragment web which accepts data and props. And in
6:00:28
here, let's go ahead and start by doing a div
6:00:34
with a class name flex flex column full
6:00:39
width full height. And then inside of here, we're going to do an I frame.
6:00:48
And we're going to add key. Uh, actually, we can't do this yet. My apologies. So for now just do a class
6:00:54
name height full width full
6:00:59
sandbox allow forms allow scripts and allow same
6:01:06
origin and then loading will be lazy and source will be data sandbox URL like
6:01:15
this and then let's go ahead and
6:01:20
import this from component fragment web
6:01:26
and I think that now when you click here you should be seeing a big error saying
6:01:31
that sandbox was not found but try creating a new prompt so build a landing
6:01:37
page. Let's go ahead and do that. And let's wait for this to generate.
6:01:44
And once you get a response, you can click on the new fragment. And in here, you are now able to preview inside of
6:01:50
the iframe the new landing page which was just created. Amazing. Amazing job.
6:01:57
So you are pretty much halfway there, right? Great. So now let's add some
6:02:02
features to make this seem like a little browser. So inside of this fragment web,
6:02:07
we're now going to add a couple of things above the iframe. Add a div and
6:02:12
give this div a class name padding two border bottom background color sidebar
6:02:20
flex items center and gap x of two. So now just above here you have a little
6:02:26
bar. Then in here add a button component and inside a refresh CCW icon. Give this
6:02:35
a size of small, a side of bottom. Oh,
6:02:40
my apologies. No, these are completely wrong props. Uh, variant of outline. And
6:02:46
on click for now, just an empty function. And now you have a refresh
6:02:52
button here. Perfect. So after that, go ahead and copy this
6:02:57
button. And in here, you're going to have the following. You're going to have a span
6:03:06
inside of here like this
6:03:11
which will render data sandbox URL. It will have a class name of truncate.
6:03:19
And now let's go ahead and do the following. Collapse all of these props
6:03:25
like so. And keep the variant and keep the size. So
6:03:32
let's just add a class name here to be flex one justify start text start and
6:03:40
font normal. So now you have a big uh kind of like an address bar, right?
6:03:47
Showing the current fragment URL. And then let's go ahead and just add
6:03:52
disabled prop to be explicitly false. And then after this button, let's add
6:03:59
another one which will have the external link icon and give this one a size of
6:04:06
small a disabled if there is no sandbox URL variant of outline.
6:04:13
And on click will be an arrow function which checks if there is no data sandbox
6:04:19
URL return otherwise call window open
6:04:24
data sandbox URL blank as the second argument. So it opens in a new tab.
6:04:32
There we go. Now let's go ahead and go inside of frame and let's add uh I keep doing the
6:04:39
key but I keep forgetting to implement the key. Let's finally do that. So go to
6:04:44
the top here and add fragment key and set fragment key and call use state
6:04:53
like this. Then let's add copied and set copied use state false.
6:05:02
Let's add on a refresh method. Set fragment key
6:05:09
previous previous + one con handle copy
6:05:17
navigator clipboard write text data sandbox URL
6:05:25
set copied goes to true and set timeout is fired with set copied set to false
6:05:33
with a 2cond timeout. out. Now that we have these two, let's go
6:05:38
ahead and add on refresh here
6:05:44
like so. And for this one, let's give it an on
6:05:49
click to be handle copy and disabled if there is no data sandbox URL or if we
6:05:56
just copied something. And in here, I think it is good enough.
6:06:04
So now you should have buttons to open this in an external tab like this. You should have buttons to copy this. So
6:06:10
when I paste, there we go. And you should be able to refresh this. But looks like the refresh one uh is not
6:06:17
working. Let me just check. Yes, it's okay if this expires. That's
6:06:22
completely fine. It expires very soon because we don't want to spend our free credits on E2B. So I don't think this
6:06:30
refresh is working and it's not working because we need to add the fragment E
6:06:35
here. So now when you hit refresh you can see how it it blinks which basically
6:06:40
means it is refreshing. Perfect. So let's try build a calculator app.
6:06:47
And let's see that and let's see how that displays in something like this.
6:06:53
And here we have a calculator app. Pretty pretty cool. Amazing. We can now
6:07:00
refresh this. And there we go. You have a whole new refreshed page. Uh, perfect.
6:07:05
You can copy this. Amazing. So now what I want to do is I want to develop one
6:07:11
simple component called hint. And we're going to store that inside of source
6:07:16
components. hint.tsx. So not inside of the UI folder. Let me
6:07:23
just close it here. I mean, it doesn't matter. If you want to, you can put it inside of the UI folder. And in here,
6:07:30
we're going to mark this as use client. And we're going to import everything tool tip related from components UI tool
6:07:37
pip. You already have this in it is inside of the UI folder. So import all of these things and then
6:07:44
create the following interface hint props accepting the children the text
6:07:49
and then optional side and align which accepts top right bottom or left and align start center and end.
6:07:57
And then let's go ahead and export const hint with some predefined props here.
6:08:05
So basically we have the children, the text, the side which by default will be top and align which by default will be
6:08:12
center. And then inside of here what you're going to do is you're going to add the tool tip provider. You're going
6:08:18
to add the tool tip itself. And then you're going to add a tool tip trigger
6:08:23
like that as child property and the render children inside. And then you're
6:08:30
going to add tool tip content. You're going to pass in the side prop. You're going to pass in the align prop.
6:08:38
And inside you're going to render a paragraph with a text.
6:08:44
Just like that. That is our hint component. Now let's go back inside of the fragment web and let's wrap it
6:08:50
around a couple of items. Starting with the external link icon. So simply wrap
6:08:55
your button in your new hint component like this. And then you can add a text here and say
6:09:03
open in a new tab and a side of bottom and then a line of start. Just make sure
6:09:10
you have imported the hint from components hint. And now when you hover
6:09:15
it say it tells you what it does, right? Because just by looking at the icons it might not be clear. And now let's do
6:09:22
that for the rest. So find the copy button and wrap it in a
6:09:30
hint like this. Click the copy with a side of bottom.
6:09:36
So now when you hover over here, you can see that you can click to copy and then
6:09:42
do the same thing for this one
6:09:49
to refresh. There we go. So now we can refresh as well. Amazing,
6:09:55
amazing job. In the next chapter, what we are going to do is we're going to implement tabs here so we can switch
6:10:02
between a code preview and a actual web preview like we are doing now. Great.
6:10:10
So, let's go ahead and mark this as completed. A very simple chapter, but a very powerful and very rewarding
6:10:17
chapter, may I say. So, let's go ahead and open a pull request. So, this is chapter 12.
6:10:23
I'm going to close everything. New branch 12. Fragment preview. Is that the name?
6:10:31
It is fragment view. Let's add and stage all of my changes.
6:10:39
Let me just click here. There we go. Stage the changes. 12 fragment view.
6:10:45
Let's commit. And let's publish the branch. And let's go ahead and open a pull
6:10:51
request here. And let's review what we just did.
6:10:59
And here we have this summary. We introduced a reusable tool tip component for displaying contextual contextual
6:11:06
hints. We added a web fragment preview component with controls to refresh,
6:11:11
copy, and open the preview in a new tab. We enabled a live preview of the project
6:11:16
fragments directly within the project view, including interactive controls and tool tips. Perfect. As always, an an
6:11:25
in-depth walkthrough as well as a sequence diagram here and some actionable comments. So yes,
6:11:32
navigator.Clipboard.ext is technically a promise. So it can you
6:11:39
can do on it and catch on it. So it is possible that the copy feature fails. So
6:11:46
it might be a good idea to add then and catch to uh at least display some kind
6:11:52
of error at least internally for you so you know something is going on. This is not a bad idea. And in here it allows
6:11:59
improving uh it suggests improving accessibility for the iframe by adding the title and area labels. Great. I'm
6:12:07
satisfied with what we have. So, I'm just going to merge this pull request. And once it is merged, I'm going to go
6:12:14
back here, main branch, and refetch. And after it refetches,
6:12:21
there we go. Fragment view is the last merged one. Amazing. That marks the end
6:12:27
of this chapter. So, let's go ahead and mark this as complete and see you in the next one. Amazing. Amazing job.
13 Code View
6:12:36
In this chapter, we're going to implement the code view. This will be a slightly longer chapter in comparison to
6:12:43
our last one simply because we have a bit more components to create. But let's
6:12:49
start with adding tabs in our project view component so that we can switch between the fragment web component and
6:12:56
code view component. So as always ensure that you are on your
6:13:01
main branch and you can synchronize changes. The last chapter was 12 fragment view.
6:13:09
Now let's go ahead inside of our project view. And this time we're going to add a
6:13:15
couple of components. So let's go ahead and just in between the fragment and the
6:13:20
components UI resizable add tabs. Tabs content tabs list and tabs trigger. from
6:13:26
components UI tabs you have them installed when you added chats UI and
6:13:32
once you have added them it's time to use them so what I'm going to do is I'm
6:13:37
going to go below the project view and I will add tab state and set tab state I
6:13:45
will add use state here and I will set the options to be preview or code and by
6:13:52
default it's going to be preview now Now that we have the tab state, let's go in
6:13:58
the second resizable panel here and let's encapsulate the active fragment
6:14:05
within tabs. Now in here, let's give the tabs a class
6:14:10
name. Height full gap Y zero. Default
6:14:16
value will be preview. value will be tab state
6:14:22
and on value change we'll get the new value and set tab state to be value as
6:14:30
preview or code like this.
6:14:36
Then inside of this tabs let's add a new div and let's encapsulate this once again.
6:14:43
This div will have a class name of full width items center padding two border
6:14:50
bottom and gap x of two and then open tabs list and again encapsulate the
6:14:58
fragment. Inside of the tabs list give it a class name of height zero padding
6:15:05
zero border and rounded medium. And then finally inside of here we can add tabs
6:15:12
trigger. The first one will be the value preview with the class name rounded medium.
6:15:22
We're going to render the I icon here which you can import from Lucid React.
6:15:27
And while you're here also import icon. Let me just move them to the top. There
6:15:34
we go. So, let me just fix this. Uh, just a
6:15:41
second. So, I think I just have to remove this.
6:15:46
There we go. So, inside of this tabs trigger, add the eye icon like that and a span demo.
6:15:57
And then copy this trigger. This one will be code with the text code and uses
6:16:04
the code icon. And then outside of the tabs list,
6:16:10
go ahead and add a div with class name
6:16:15
ML auto flex items center and gap x of
6:16:22
two. And this button will
6:16:28
uh I'm sorry this div will encapsulate a button from components UI button
6:16:35
which will uh not serve any purpose now but it will later. So give it as child
6:16:42
give it size small variant and for now give it well just default
6:16:52
a link from next link. So, make sure to add this
6:17:00
with an href of pricing and add a crown icon
6:17:08
and upgrade text. Great. And now
6:17:16
outside of that div and outside of this div as well. So move this outside. Add
6:17:23
tabs content. This one will be for value preview. So
6:17:30
you can put this finally inside. And then we're going to have another tabs content
6:17:36
or value code. And this will simply be a paragraph to-do code.
6:17:43
There we go. So make sure tabs content is still inside of tabs. So now when you go inside of your app here, you should
6:17:50
see a button to upgrade which should lead you to 404 page. And you should see
6:17:56
that you can switch between demo and between code. Uh the demo doesn't show
6:18:01
anything until you select a fragment. Right? So you can see how you can switch between the two. So now let's develop
6:18:09
the code part. So in here it will be quite similar.
6:18:16
So let's start by doing the following. MPM install prismjs.
6:18:22
This will be used to uh highlight code syntax. So let's go ahead and develop
6:18:28
this simple component inside of source components. So in here
6:18:33
add code view.tsx. And in here you're going to need uh just
6:18:40
one more thing. So let's actually create a folder code view like this and move
6:18:47
this inside. And you can change this to be index.tsx.
6:18:56
And then go inside of your uh Mine assets. You can use the link in the description or you can see it on the
6:19:02
screen here. And find code theme.css. So it's quite long. That's why we are not typing it. So go ahead and copy this
6:19:10
and create it here. So code theme.css
6:19:15
and just paste the entire thing inside and save it. And now let's go ahead and develop the code view here. So you're
6:19:23
going to import everything from PrismJS. And let me show you Prism.js. Oh, did I
6:19:28
install it or not? MPM install PrismJS.
6:19:35
Let me see. PrismJS. It is installed. But I think I also need to do mpm install-d at types
6:19:43
prismjs. There we go. So, prismjs 1.3 and types
6:19:49
1.26.5 and now it works. Below that, import use effect and then
6:19:57
import the following things. Risenjs components and then JavaScript, JSX,
6:20:03
Python, TSX or TypeScript. You can remove if you're not going to use Python for example.
6:20:10
And finally, import code theme CSS. So
6:20:15
just make sure this is in the same folder. Right. Then export const code view
6:20:23
and create a simple interface props
6:20:29
which accepts the code which is a string and a language which is a string.
6:20:36
So assign the props. Let's dstructure them. Code and language. And inside of here, return
6:20:44
a pre-tag. Give it a class name padding two, background color transparent, border
6:20:52
none, rounded none, margin zero, and the text extra small.
6:21:00
And inside of here, add a code element, which renders the code.
6:21:07
And let's give this a class name. And let's go ahead and use language
6:21:14
dash lang like this. Usually if this was a TypeScript uh class name, you would
6:21:21
not do this because this type you shouldn't do this kind of half dynamic
6:21:26
class name, right? You should instead do the full one. But this is not a Tailwind
6:21:32
class. This is a class from Prism, right? That's why you don't have to worry
6:21:38
because you can see that it is exactly what it expects. And now let's just use the use effect
6:21:45
here for a very simple thing. So on load simply use prism and highlight all.
6:21:53
That's it. So that's going to be our code view component.
6:21:58
And if you go inside of project view, uh maybe we can already render it. Let's try code view.
6:22:04
And let me try adding language to be JS or let's do ts. And let's do code.
6:22:11
Let me just try const a is equal hello world
6:22:18
something like that. Let's see if we are able to preview that. And we are. There we go. And I think that it will also
6:22:25
affect dark mode. And you can see how the syntax is visible. Very nice.
6:22:31
And now let's actually uh use this in a file explorer because that's what we
6:22:38
have to do next. So we're going to go ahead and create the file explorer
6:22:44
inside. Yes, let me just show you how you can import code view. So you don't have to go to index.
6:22:51
Index can be uh used like this. That's why we named it index. So you can just
6:22:56
target code view. In case this doesn't work for you for any reason, you can just name this
6:23:02
properly, name it code view again and then just import that way. And let me just move it up here. There we go.
6:23:11
So now let's create the file explorer component. I'm going to go inside of source
6:23:16
components file. Whoops.
6:23:22
File explorer.tsx. And let's go ahead and let's prepare the
6:23:29
imports. Copy check icon and copy icon from lucid react. Use state use memo and
6:23:36
use callback as well as fragment from react.
6:23:41
Hint and button from components. Button comes from shatzen meaning it has the UI
6:23:48
prefix and hint is our custom component which we created in the previous chapter. Now let's import our new code
6:23:55
view which we just created. And then let's go ahead uh and add
6:24:03
resizable with resizable handle panel and panel group. And let's also import everything
6:24:11
we need from breadcrumb. So both of this come from shatnui. So you have them
6:24:18
breadcrumb item list page separator and ellipses.
6:24:23
Now let's go ahead and let's define our file collection.
6:24:28
This is our file collection type. It is basically a type of record string
6:24:34
string. But I like to use this type simply because it uses the path as the key and then the content here. I think
6:24:39
this kind of visually makes more sense. I think we did the same thing in our
6:24:45
functions path string. Yes, this is exactly how we defined our files here. So I like to do
6:24:51
this because I think uh it visually looks better. Great. So now let's go
6:24:57
ahead and first create a function which can extract language from file extension. So get language from
6:25:04
extension accepts the file name and returns a string. And what we do here is we simply target the extension part and
6:25:12
we take that part and we turn it to lowercase and we default to text if we
6:25:17
were unable to do that. So basically if we enter something like app.tsx
6:25:23
we return tsx as the language. As simple as that.
6:25:30
Perfect. Now let's go ahead and let's create
6:25:35
uh a component which we are going to need in order to even render uh which file is currently active. So I'm just
6:25:41
trying to think what is the best way to build this so that you can see the results as soon as possible because
6:25:47
there's a lot of components we have to build and I'm just afraid that um we might have to build for a lot of time
6:25:53
without seeing any results. So this is what I will do. We're going to do export
6:25:59
const file explorer like this.
6:26:04
Let's create an interface file explorer. Actually, let's just call this yeah file explorer props because we're going to
6:26:11
have many components in this file. So I want to name this explicitly to be file explorer props. It will accept files
6:26:18
which are a type of file collection like this. Then let's go ahead and let's use this
6:26:25
and we can destructure the files from here. So now what I want to do is I want
6:26:31
to add the return resizable group resizable panel group like this with the
6:26:38
direction horizontal and then resizable panel
6:26:47
with a default size of 30 with a minimum size of 30 and a class
6:26:54
name background sidebar. And inside of here, a paragraph to-do
6:27:02
tree view like this. Then let's go ahead and let's add a
6:27:08
resizable handle here with a class name hover background
6:27:15
primary and transition colors like this.
6:27:21
And then let's go ahead and do another resizable banner
6:27:27
like this with a default size of 70 and a minimum size of 50.
6:27:34
And in here what we are going to do is try and do files
6:27:42
first in the array. I'm just thinking of a way. Okay, I know
6:27:48
what we can do now. Let's create a state called selected files.
6:27:55
So const selected file set selected file
6:28:00
use state. And it can either be a string or null.
6:28:06
And let's go ahead and create a function inside of use state to get the file keys
6:28:13
by using object keys and pass in the files. And then return file keys.length
6:28:18
length is larger than zero, we can select from the file keys the first in
6:28:24
the array otherwise null. So this way we are going to pre-seelelect the first
6:28:29
file we can find. And now that we have this first file, I think it will be a little bit easier for us to build this
6:28:36
UI. So inside of this second resizable panel, check if we have the selected
6:28:41
file and if inside of files we can find this selected file. If we can do that,
6:28:48
go ahead and render a div code view
6:28:53
like this. Otherwise, let's go ahead and render the alternative which is a div
6:28:59
which says select a file to view its content
6:29:06
with a class name flex height full items
6:29:11
center justify center and text muted foreground
6:29:16
and I think it's time to render this. So let's go inside of the project view here and let's go ahead and render it
6:29:23
instead. So remove code view and check if you have active fragment question
6:29:29
mark files. Render the file explorer component and
6:29:35
pass in the files to be active fragment.files files as and in here you
6:29:42
can choose to use let me just copy from here
6:29:49
this type basically because the JSON type will be any right
6:29:54
so we are now marking it as this make sure to import the file explorer and you
6:30:01
can remove the code view now because we're going to use it inside of the file explorer and I think that already just
6:30:06
make sure you have a fragment selected here When you click on code, you should have a to-do tree view and to-do code
6:30:13
view. Perfect. And I've had some trouble uh making this
6:30:19
work. Oh, looks like it's working just fine. Okay, my version had some problems. I think looks like it works
6:30:27
just fine nevertheless. Okay, now let's go ahead and let's actually develop the tree view and the code view. So, I'm
6:30:34
going to go back inside of the file explorer here. And I think it might be easier to develop the code view first
6:30:40
simply because we already have the code view. So I'm going to go inside of this div here and I'm going to add a class
6:30:46
name height full width full flex and flex column. And then I'm going to open
6:30:53
a new div. The class name border bottom bg sidebar px4 py2 flex
6:31:02
justify center. Uh actually it will be justify between items will be center and gap x will be
6:31:10
two. Then let's add to-do breadcrump file
6:31:16
breadcrump like this. And then add a hint component
6:31:21
wrapping our button component and give this a text of copy to clipboard and the
6:31:27
side of bottom. And for this button right here, give it
6:31:33
a variant of outline, a size of icon, a class name of ML auto on click to be an
6:31:41
empty arrow function, and disabled
6:31:46
to be false. And inside of here, render the copy icon.
6:31:52
So now, when you click on code, you should have the copy to clipboard
6:31:58
button. Just make sure you have both button and the hint imported.
6:32:04
Great. And now below this div, we're going to open a new div with a class
6:32:10
name flex one overflow auto and render the code view.
6:32:18
In here, select the code to be files and then selected file. And the language
6:32:24
will be oops the language will use our function get
6:32:31
language from extension selected file. Whoops.
6:32:38
Like this. And by default, you can see that it selected a specific file. Right
6:32:44
now, I'm not able to scroll. We will fix this as well. by uh let's see it has
6:32:50
overflow auto but I think that we are missing uh something obviously because
6:32:56
it's preventing us from doing this uh so let's see
6:33:03
everything here seems fine but yes I'm not able to scroll to the
6:33:09
bottom here so how about I go inside of the project view here
6:33:14
and to the value code add a class name a minimum height of zero.
6:33:21
And I think that now when you select the fragment, there we go. Now I'm able to scroll in all directions, you should be
6:33:29
able to scroll left and right and up and down. So basically inside of your
6:33:34
project view in the tab content for the value code, add a minimum height of zero. And this will allow you to scroll
6:33:41
inside of the code preview. So this is now showcasing the very first file it selected. But now we have to build the
6:33:49
tree view so we actually see the file we selected and so that we can choose between other files. And then we need a
6:33:56
breadcrumb component here to render the current file. So let's go ahead and
6:34:01
let's build the tree view next. So I'm going to prepare that right here in the
6:34:07
file explorer right above where we added a to-do to render the tree view. Let's
6:34:13
add tree view like this. And let's give it some props. Data is going to be an
6:34:20
empty array. Value will be selected file. On select will be an empty
6:34:27
function. And now let's go ahead and let's prepare this things here. So what
6:34:32
I want to do now is the following. Uh I want to go inside of source lib utils
6:34:39
and I will export function convert files to tree items
6:34:46
and I'm going to create a JS doc like this simply so you can see what happens.
6:34:52
So this JS doc is quite useful. I don't like I mean I don't use it usually but
6:34:57
it's useful when I feel like things are not exactly clear. You can see how when you create a comment like this and when
6:35:04
you hover over a function it actually tells you that. So it converts a record of files to a tree structure. So we
6:35:11
accept files which is a record of file paths to content. So this is the input right source button tsx and then some
6:35:18
content and this is the output that it will return. So that's what we are building now. So let's go ahead and add
6:35:26
some props here. files which will be a type of path which is a type of string
6:35:32
and a string and it will return a tree item. So now
6:35:38
we need to create the tree item object. So let me just
6:35:44
uh do this like so I'm trying to think of a perfect place
6:35:49
to add this to. Um how about in source we just create
6:35:55
types ds and let's export type tree item
6:36:01
and that will be a string or an array of string
6:36:07
and tree item itself. So it can reference itself right it can be a
6:36:14
deeply nested array. Now that we have this, we can go back
6:36:19
inside of the utils file here. Uh, and we can set the return method to be the
6:36:25
return type to be tree item from the types. And it's going to be an array of those three items and it's going to be
6:36:32
an error until we actually return that. So I want to do this because this way we are certain that we correctly developed
6:36:38
this. So let's start by creating an interface tree node like this which is
6:36:46
basically a key which is a string and then tree node which is itself inside or
6:36:51
null. Then let's define a tree which is a type of tree node and it's going to be
6:36:57
an empty object at first. Now let's go ahead and create sorted paths. So we are
6:37:04
basically sorting the files alphabetically by their path. And then what we're going
6:37:09
to do is a for loop. So for const file path of sorted paths.
6:37:17
Let's go ahead and this uh split the file path into parts by doing file
6:37:24
path.split by a forward slash. The current one will
6:37:29
be the current tree which is just the empty object for now. And then for
6:37:36
let index being zero, index being less than the parts length
6:37:43
minus one and index increasing by one for each iteration
6:37:48
get the part. So parts and using this index here if we cannot find the path
6:37:57
the part in the current object we need to add it there like this
6:38:05
and then current is equal to current part like this.
6:38:11
And then what we have to do outside of here is add the file or the leaf node.
6:38:19
Right? So const file name is parts parts.length minus one. Current file
6:38:27
name is equal to null. This will basically indicate that it's a
6:38:33
file. This is quite confusing, right? But once you see how the file uh
6:38:38
structure will look, it will make a little bit uh more sense. Uh okay. So I
6:38:46
think that this uh let me just see.
6:38:52
Yeah. So okay, we just finished this for loop, right? And now we have to uh
6:38:59
convert the node. So let's create an inner function to do that. function
6:39:05
convert node. The node it accepts is a tree node.
6:39:11
We have defined a tree node right here.
6:39:16
And the name is an optional string and it returns back a tree item, an array of
6:39:23
tree items or a single tree item like this. So let's get the entries to
6:39:31
be object entries from a specific node.
6:39:36
If entries.length is equal to zero, return the name or an
6:39:42
empty string. Then define the children to be a tree item
6:39:47
like so. And set it to be an empty array for now.
6:39:54
And then let's go ahead and do for const
6:40:00
they structure the key and the value of entries and do the following. If value
6:40:08
is equal to null that means this is a file. So do
6:40:15
children.push key. Else this is a folder. So create a sub
6:40:24
tree using convert node and pass in the value and the key. So we need to go
6:40:29
deeper. We need to recursively call this function again until we find a file. If
6:40:34
array is array subtree
6:40:40
children dopush open an array of key and spread the
6:40:45
subree. else children do push key and subtree
6:40:54
like so. And then let's go ahead outside of this four and return the children
6:41:03
like so. And then let's define the result here to be convert node tree and
6:41:10
return array is array result
6:41:15
otherwise result inside of the array like this.
6:41:21
And if you've done it correctly you should have no errors here.
6:41:26
Now I completely understand that this was a very complex task. And if if you
6:41:32
are worried that you did it incorrectly, don't worry. Uh I have added my entire utilus files to my public assets. So you
6:41:39
can just find it here and you can copy it from here. For example, I can copy this entire file and I can paste it in
6:41:46
here like so. So now I have this convert node and I have the convert files to
6:41:52
three items. Right? So if you want to do a double
6:41:57
check or you just want to copy file uh because it's easier, you can do that. Don't worry. Uh yes, a slight mistake
6:42:05
here. My apologies. Uh so don't worry, I will fix I will fix this file so it
6:42:10
doesn't use this import because our tree item comes from types.
6:42:16
Yes. So import type three item. Uh I will fix that instead. I think I can fix
6:42:22
it right now. There we go. Like so.
6:42:28
So when you copy, you won't have that problem. Uh and I will double check by copying this file again. Pasting it. Uh
6:42:37
oops. Copy it again. I cannot seem to copy it. Let me try one
6:42:44
more time. I think the copy button is still using the old one.
6:42:49
Okay. Finally, no errors in the utilus file. Okay. So, now that you have the
6:42:55
convert files to tree items, we can go back inside of the file explorer.
6:43:05
And in here, uh, we're going to have to create tree data. So, const tree data
6:43:12
will be use memo and return convert files to tree items
6:43:18
and pass files here. And in here add files as a dependency. So just make sure
6:43:24
you imported our newly created function here. Uh you can either write write that
6:43:30
function yourself as we just did or you can copy it from the source code or from the assets folder. Uh great. Now that we
6:43:37
have this and we have the tree data, let's go ahead and let's add the const
6:43:43
handle file select to be use call back.
6:43:50
And inside of the use call back, we're going to
6:43:55
check the file path to be a type of string. And if files file path exists, set
6:44:05
selected file to be the file path. And add files here. There we go.
6:44:13
Perfect. And now inside of the tree view, add the tree data here.
6:44:21
And on select, add handle file select like so. And now it's time to develop
6:44:28
the treeview component. So I'm going to go inside of components tree view.tsx.
6:44:36
Let's go ahead and create the interface tree view props which uses the tree item from our types
6:44:43
like so. And now let's export const tree view.
6:44:50
Let's assign the props. Tree view props. In here we get data value end on select.
6:44:59
And in here let's go ahead and let's return a paragraph tree. Actually maybe
6:45:05
we can do JSON stringify data just so we can see
6:45:10
what we created. And let's import the tree view from dot slash treeview.
6:45:20
And if you go back to your app here, select a fragment and click code. There we go. I have app folder and page.tsx.
6:45:27
So those are for me. But if I go into one of my older ones, well, looks like all of these are pretty simple. So it's
6:45:34
going to keep using just uh a simple example. But if you tell it to build
6:45:39
something complicated, uh you will have more items here. So this represents a
6:45:45
folder and this represents a file. And now I mean this is basically how the file structure should look like. And now
6:45:52
we're going to use that to properly render the tree view. So, uh, let's go ahead and let's import
6:45:59
everything we need from the sidebar component. So, that's going to be the sidebar, the
6:46:06
content group, group content, menu, menu button, menu item, menu sub, provider,
6:46:13
and rail from components UI sidebar. You already have this when you added Shatsen
6:46:18
UI. And now let's go ahead here and let's render that. So starting with the
6:46:24
sidebar provider and let's render sidebar with
6:46:30
collapsible to be none and class name to be width full and then sidebar content
6:46:39
like so. inside of the sidebar content. Sidebar
6:46:45
group sidebar group content sidebar menu
6:46:54
like that. So you shouldn't see anything now simply because we didn't add anything in the
6:47:01
menu. So now what we have to do is we have to develop the tree component. So let's do that below here. Const tree
6:47:11
will have an interface tree props which will accept item which is a type of tree
6:47:16
item. It will accept selected value which will be an optional string or it
6:47:22
will be null on select which will be an optional function which accepts the value
6:47:28
which is a type of string and returns a void and parent path which will be a
6:47:34
string. So let's go ahead and add tree props here and the structure the item selected
6:47:42
value on select and parent path like so.
6:47:49
Inside of here, let's first do a destruction of the name and the rest of
6:47:54
the items from an array. Array is array item. If it is, we can render the item.
6:48:02
Otherwise, put the item in the array. Then let's get the current path. This
6:48:08
will check if we have the parent path and it's going to render dynamically
6:48:13
using backd parent path forward slashname otherwise just the
6:48:19
name of the file. If we don't have any items,
6:48:26
uh this means that this is a file. So let's add it's a file const is selected
6:48:33
here will be selected value equals current path
6:48:40
and in here we're going to return sidebar menu button
6:48:46
with is active to be is selected and class name will be data active true
6:48:54
background transparent and I'll click Here we'll call on select with a
6:49:00
question mark because it can be optional and pass the current path inside of here. Render the file icon
6:49:09
uh file icon from lucid react. Just make
6:49:14
sure you have it like that. And below that a span and the name. And this will
6:49:20
have a class name of truncate like that. and then go outside of this
6:49:26
if clause and this means it's a folder
6:49:32
and in here return sidebar menu item
6:49:37
with collapsible uh we now have to import the things from collapsible as well. My apologies I
6:49:44
forgot about that. So just add collapsible content and trigger from components UI collapsible. you also have
6:49:51
those components. So, let's go ahead uh down here and
6:49:59
instead of the sidebar menu item, open collapsible like that.
6:50:06
Uh let me just fix this collapsible. Give it a class name of
6:50:12
group forward slash collapsible.
6:50:18
and then add the following class name which is a little bit longer and looks
6:50:23
weird. So basically open curly brackets and this entire thing is inside of that
6:50:30
curly brackets and and then if data state is open for this component target
6:50:37
the button target the SVG and target the first child and rotate it by 90
6:50:44
and set the default to open inside of here collapsible trigger with
6:50:51
the prop as child Add a sidebar menu button component with
6:50:58
the chevron right icon from lucid react and give it a class name of transition
6:51:04
transform. So this is the icon that we are going to rotate by 90 once we open
6:51:09
this collapsible and next to it add a folder icon from
6:51:15
Lucid React and then a span with the name of the folder and the class name
6:51:21
truncate and then outside of the collapsible trigger use a collapsible content and
6:51:30
inside of this a sidebar menu sub
6:51:35
and inside of here go over items.mmap get the sub item
6:51:44
and the index and render the tree again. That's right. We are rendering itself
6:51:51
again. And in here set the key to be index item
6:51:58
to be sub item. Selected value to be selected value.
6:52:04
On select to be on select oops parent path to be current path
6:52:14
like that. And that's it for the tree component. What we have to do now is we
6:52:19
have to actually use the tree component. And we're going to do that by going back here inside of the sidebar menu and
6:52:26
simply do data.m map item and index. Render the tree component.
6:52:33
Pass in the key to be index. Item will be item. Selected value will be the
6:52:39
value. On select will be on select and parent path will be an empty string. So
6:52:47
let's see what we didn't use. We didn't use sidebar rail. So, we forgot that.
6:52:52
So, let's go down here after sidebar content and render sidebar rail.
6:53:02
Now, let's go inside of the file explorer. Oh, we already have tree view. So, there we go. Here we have it. And we
6:53:08
can open and close it. Uh, but looks like our select isn't really showing. It
6:53:14
isn't working. So, let's fix that.
6:53:19
Or maybe this is the selected state. I'm not exactly sure. So I'm going to try
6:53:26
and develop something a bit more complicated. So I'm going to try to prompt it to something to create more
6:53:32
files. Okay. So what I did is I asked it to
6:53:38
build a landing page with each part in its own component. And that generated a much better result as you can see. So
6:53:45
what I'm going to do is I'm going to expand this. I'm going to go back to the code and yeah, I still am not able to
6:53:51
select this. So, let's go ahead and look at what we forgot to do. So, okay, these
6:53:56
breadcrumbs are unused. That's okay. Uh, we're going to use them in a moment, but
6:54:02
it seems like this handle file select uh is not working properly. So what I'm
6:54:10
going to do is I'm going to first start by adding a console log
6:54:16
and rendering the file path. So I'm going to open my
6:54:24
inspect element here and okay. Oh, so it looks app name is being sent. Okay, so
6:54:30
that definitely doesn't exist. Let's go inside of a tree view and let's see what I did wrong. So in here we have on
6:54:38
select parent path and then the name. Yes, this this
6:54:45
doesn't look correct. I think I meant this in the current path.
6:54:53
Let me refresh and check. Select the fragment check.
6:54:59
There we go. So I'm I'm not sure if you can see. Well, you can definitely see the code is changing, right? And also
6:55:06
the file is is a little bit bold. So basically the problem was in the tree
6:55:11
view component the current path I hardcoded name when what I should have been doing uh is put it inside of curly
6:55:19
brackets like this. Excellent. So now that we have this uh
6:55:25
the good thing is no more no need for to do anything more in the tree view. Uh
6:55:30
now let's go ahead and let's enable the copy button and let's create the file breadcrumb here. So I want to do the
6:55:36
file uh breadcrumb thing first. So I'm
6:55:41
going to go inside of the file explorer. Um let's go just above it here. So const
6:55:49
file breadcrumb like this. Let's go ahead and create an interface
6:55:56
file breadcrumb props which accepts an individual file path.
6:56:03
Let's extract the file path from here and let's go ahead and get the path
6:56:10
segments by a forward slash and let's limit the maximum number of segments to
6:56:16
be four. So if the path goes deeper than four segments, we're going to be
6:56:21
responsive about it. Now let's do con render breadcrumb items
6:56:28
like this. And in here if path segments
6:56:34
length is lower than or equal than maximum segments add a comment show all
6:56:41
segments if four or less.
6:56:48
So let's return path segments here. Map segment
6:56:53
index const is last will be if the index is equal to path
6:57:00
segments.length minus one and in here return a fragment.
6:57:07
Give it a closing tag. Give the fragment a key of index. The
6:57:13
fragment is imported from React right here. Inside of the fragment, add a
6:57:19
breadcrumb item. Check. Oh, let me just fix bread
6:57:26
breadcrumb inside check is last if it is render
6:57:33
breadcrumb page and inside the segment
6:57:39
and give it a class name of font medium. If it is not last,
6:57:46
we're going to render a span element and segment inside and give the span a class
6:57:52
name text muted foreground. And then outside of the breadcrumb item,
6:57:59
if it is not last, again add a breadcrumb separator
6:58:05
like so. And this was inside of this if. So let's now add else.
6:58:12
We are going to show the first element and then ellipses if we have more than
6:58:18
four of them. So the first segment is what we care about. Path segments first in the array.
6:58:27
Last segment. So path segments.length
6:58:33
minus one. So it's only those two that we care about. And once we get those two, let's simply
6:58:40
return a fragment breadcrumb item
6:58:46
a span first segment with a class name text muted foreground. And then let's go
6:58:55
ahead and add the breadcrumb separator and the breadcrumb ellipses like so. So
6:59:03
render the breadcrumb separator and then a breadcrumb item which renders the breadcrumb ellipses. All of these are
6:59:10
imported from the same thing. Then let's add another breadcrumb item here with a
6:59:16
breadcrumb page and render the last segment inside
6:59:22
and give this a class name of font medium. And finally
6:59:29
outside of this function return breadcrumb
6:59:36
and then breadcrumb list and then render breadcrumb items
6:59:45
like that. So a little bit of effort here to create
6:59:50
nice and responsive file breadcrumbs. And now let's go ahead and let's render them. So that's going to be rendered in
6:59:58
the code view. So there we go. To-do file breadcrumb just above this hint.
7:00:04
Let's render a file breadcrumb. And let's give it a file path to be selected file.
7:00:12
And there we go. App contact tsx features footer hero navbar. And if you
7:00:18
create one that's very deep, it will show a maximum of four folders before it
7:00:26
uses the responsive mode and it will just replace the folders in between with an ellipses which is basically three
7:00:33
dots. Perfect. Now let's implement the copy feature.
7:00:39
So we already did this before. So we can copy it from that place. Handle copy use
7:00:45
call back. If we have the selected file right to the navigator clipboard with files selected file and now we have to
7:00:52
add the set copied state. So let me just add it here above the
7:00:59
selected file. Copied and set copied. Perfect. So now we have handle copy. And
7:01:04
now let's use the handle copy for this button right here. Handle copy. And
7:01:12
let's paste in copied. copied. If it's copied, we will use the copy
7:01:19
check icon. Otherwise, the copy icon
7:01:26
like this. And you should no longer have any errors in your code because we are using everything. So when I click copy,
7:01:31
it turns into a different icon now. And you can see that I just copied that entire thing. Amazing. We just developed
7:01:39
a super amazing file explorer. So now I'm going to try to prompt it to create
7:01:45
a deeper structure. But this is pretty much it for uh this chapter.
7:01:53
All right. So this time I told it build a landing page with each part in its own component. Use deeply nested folders.
7:02:00
And you can see that I definitely got that. So inside of the app folder I have
7:02:05
a landing and then I have features and then I have the file. And you can see our breadcrumb in action now. But for
7:02:12
example, you can see that I can break it, right? I if I open this too much, it breaks. So what you can do is you can
7:02:18
remove the maximum segments here to be three. And it will be reasonable to change the comment here as well. And
7:02:26
this is how it will look like. Then let me just refresh. I think the error was because of the hot reload. And let's
7:02:31
click on the fragment here. So let me select features. Uh okay. So you can see it works. But it
7:02:39
seems like we have some problem here. Uh, okay. List cannot be a descendant of
7:02:44
list. Uh, okay. It's a hydration error. It's not exactly too big of a problem, but I'm
7:02:53
not um I'm not too sure how to fix that at the top of my mind right now. So, I'm
7:02:59
going to leave it like this. I think it's not too big of an issue. It's a small hydration error, but you can see
7:03:04
how it looks, right? And if you click on something simpler like page, you can see that it will display the entire thing.
7:03:10
But for something complicated, it will just show you the first and the last segment. So you can decide if you want
7:03:17
to show that for three segments or for four segments, right? Whatever makes
7:03:22
sense for you. Amazing, amazing job. So I think this was uh a much harder
7:03:29
chapter, but I think it was worthwhile. We have an actual uh file explorer now
7:03:34
that we can copy files from and explore everything that was created. We can scroll. Definitely an impressive result.
7:03:43
So now let's go ahead and mark these things as completed
7:03:48
and let's open a new branch. So 13 code view. Let me collapse this. Open the
7:03:54
source control. Opening a new branch here. 13 code view. Just to double check
7:04:02
that's the chapter's name. Once we are on the new chapter, I'm going to stage all of my changes. 13 code view. I'm
7:04:09
going to commit and I'm going to publish this branch. As always, a reminder,
7:04:15
there's a free code rabbit extension you can use to review your files. And now, let's go ahead and let's see
7:04:24
our pull request. So, I'm going to open this new pull request here. And let's
7:04:29
review our summary. And here we have the code rabbit
7:04:35
summary. We introduced a code viewer with syntax highlighting and GitHub dark theme. We added a file explorer with
7:04:42
three view breadcrumb navigation and a copy to clipboard functionality for code
7:04:47
files. We enhanced the project view with tabbed navigation allowing users to switch between a live demo and the code
7:04:54
view of project fragments. That is exactly what we did in this chapter. As
7:05:00
always, a walkthrough of file by file and of course a sequence diagram. So in
7:05:05
here we have this very complicated component which we build the file explorer which renders the tree view and
7:05:12
then finally the code view. So in here you can see it generated the entire sequence diagram for that component
7:05:18
along with the prisjs code highlighting. So very very good. We have a few
7:05:25
comments here. Um this one is a good comment. It's basically telling us to also add an actual type of check. The
7:05:33
reason it's telling us this because uh it could be anything but then at the
7:05:40
same time we know that it's always going to be an object. It's going to be a type of JSON, right? So, I think this is a
7:05:47
little bit redundant. Adding it would not hurt, but I think
7:05:52
it's okay the way it is right now. I'm not sure about this change. I think uh
7:05:58
it works just fine like this. And in here, I accidentally added two
7:06:03
semicolons in the file explorer props. So, yes, of course, we can remove that. I'm going to do that in the next
7:06:09
chapter. And there we go. Let's merge this pull request and let's go back here and let's
7:06:16
go ahead and go back to main and let's synchronize our changes again.
7:06:22
And once you've done that, go inside of source control graph and just confirm that you merged the 13 successfully.
7:06:30
Amazing, amazing job. That marks the end of this chapter and see you in the next one.
14 Home Page
7:06:38
In this chapter, we're going to develop the homepage. This will include creating the home layout, the homepage component
7:06:45
which consists of project form and project list. Let's go ahead and let's
7:06:50
start our app. Running npm rundev in one terminal and starting in justestdev
7:06:56
server in the other. And now let's go ahead and make sure we are on the main branch. And you can click on synchronize
7:07:04
changes just to make sure everything is up to date inside of your source control. The last merge should be number
7:07:10
13. Now, let's go ahead and let's fix one thing that's been bothering me. So,
7:07:17
right now, uh I'm loading my previous project here. You can see that when the project loads, no fragment is selected.
7:07:25
This is because in the messages container here, we commented out this use effect which selects the last
7:07:31
fragment because it was causing problems. You can see that when I enable this, then it works. This is selected.
7:07:38
But it's annoying because if I want to select this one and look at it, you can see that it automatically moves it after
7:07:45
5 seconds. Why after 5 seconds? Because we refetch every 5 seconds. So this use
7:07:51
effect can obviously be improved. So let's go ahead and make it a little bit
7:07:56
simpler. I'm going to go ahead and remove everything in here for now. And I'm going to start by adding a new ref
7:08:03
right below the bottom ref. add last assistant message ID ref which can be a
7:08:09
simple use ref of a type of string. And now inside of this use effect here
7:08:16
let's go ahead and find the last assistant message. So last assistant message we'll use messages find last and
7:08:24
then simply find the message whose role is assistant. So messages.findlast find the last API is that we are using and
7:08:33
then in here we're going to open an if clause
7:08:38
and what we are going to do is we're going to check if last assistant message
7:08:43
fragment exists and if last assistant message do ID is not identical to last
7:08:50
assistant message id refer. Let me just remove this. So if that's
7:08:57
the case only then are we going to call set active fragment and do last assistant message. fragment and then we
7:09:04
have to update last assistant message id ref.curren to be last assistant message
7:09:12
id and this way we won't have any unnecessary updates and we can remove this to-do here. So let's go ahead and
7:09:20
do a refresh again and there we go. So you can see how it selects the fragment the last assistant message it it can
7:09:26
find. But if I manually select this one let's wait for 5 seconds and you can see
7:09:31
that nothing will change it right simply because this last assistant message ID
7:09:38
ref is stored. So the only time that we are going to override users selection is
7:09:45
if an actual new message arrives. I think that's an okay UX. If you want to,
7:09:51
you can uh improve this logic even further by creating two separate states.
7:09:57
One for the automatic selection of the active fragment and one for the user selection of the active fragment. And
7:10:04
then you can overrule one over the other if that's something you prefer. Because you can see now nothing can change the
7:10:11
fact that this fragment is active unless I do build a yellow landing page.
7:10:18
So if I add this still nothing is happening. I'm still uh having this
7:10:24
older fragment as selected. Only after uh this finally responds with some new
7:10:32
content will the new fragment be automatically selected because it is
7:10:37
constantly looking for the last new assistant message. So, our message
7:10:44
wasn't able to trigger that use effect. And if it simply calls the refetch
7:10:51
request and it receives the exact same messages, we compare the last message ID
7:10:57
with our ref ID. And if it's the same, no, we don't change anything. And there
7:11:03
we go. You can see how it works. I didn't change anything. It just generated a new landing page and it
7:11:08
selected that fragment. That is the exact behavior we hoped for. Amazing.
7:11:14
So, what I want to do now, which you know, you can choose if you want to or not. I just want to remove this handle
7:11:20
from here. I don't like it. So, this is what I'm going to do. I'm going to open
7:11:25
both the project view and I'm going to open the file explorer. And the only thing I want to do in the file explorer
7:11:32
is copy the class name from the resize handle. And then I'm going to go inside of the project view. I'm going to find
7:11:38
the resizable handle here. remove the prop with handle and just paste the class name here. And there we go. Now I
7:11:45
have this type of resizable. And there seems to be some kind of problem. You can see when when you have two
7:11:51
resizables active, you can only move one of them, right? So you can't move this
7:11:57
one. I'm going to explore at the end of the tutorial if that's something we can fix. There might be some solution, but
7:12:03
you know, it's it's not too big of an issue. Great. So now let's go ahead and let's actually uh build the homepage.
7:12:11
So we're going to go and do the following. Inside of your source app folder, create a new folder home. This
7:12:19
is a route group. This will not be a part of the URL, but it can hold things
7:12:25
like layouts. So let's go ahead and build a simple home layout here. The
7:12:31
first thing we have to do in a layout is create props which hold the children. And then we have to do a default export
7:12:37
like this. And in here we assign the props. And we extract the children. And
7:12:44
then inside of here, let's add instead of div, let's add main.
7:12:49
And let's give the main a class name of flex. Flex column, minimum height of
7:12:55
screen, and the maximum height of screen. Like so. And in here, let's add
7:13:01
a div with a class name flex one flex flex column ex four and padding bottom
7:13:10
of four. And inside render the children.
7:13:15
And then what I want you to do once you have this layout tsx it is important that this is called layout. This is a
7:13:22
reserved file name just like a page, right? So, it's important that you use
7:13:28
layout and it's important that you do a default export here. What I want you to do now is I want you to uh move the page
7:13:36
tsx from the app folder, the global one, and drag it inside of the home folder.
7:13:42
So, move it inside. And sometimes this can trigger some unsaved files. So, if
7:13:47
you get any unsaved files here, you can just close them. And if it asks you if you want to save it or not, you can just
7:13:53
click yes. If nothing happened, you can just continue. What basically happens if
7:13:59
that does happen to you is cache, right? The hot reload is currently active. So
7:14:05
sometimes the cache inside of this folder gets confused when you move a page that's currently uh active. So what
7:14:11
did we do now? Well, if you go and click back to the dashboard, nothing changes,
7:14:17
right? That's because what we just did is we created a layout for all of our uh
7:14:24
homebased pages. Right now, this doesn't make too much sense because we only have one page, the homepage, right? But later
7:14:32
in here, we're also going to have pricing and we're also going to have login forms. So that's why instead of
7:14:38
copying this code every single time into each page, we're just going to uh create
7:14:44
a nice little uh reusable layout like so. Now in here, let's go ahead and
7:14:51
let's do the following. I want to create a uh self-closing div like so. and give
7:14:57
it a class name of absolute inset zero minus Z 10 height of full width of full
7:15:06
bg background on dark use bg
7:15:11
radial-ashgradient like so and then inside of here write 39
7:15:19
9 so 3 93 E48_1
7:15:24
pixel comma transparent
7:15:29
and then underscore one pixel. So this is all one class name dark background
7:15:36
radial gradient transparent right. So all of this is one class name. What's important is that when you hover over
7:15:42
this if you have the tailwind extension you should see the underlying CSS. If
7:15:48
you accidentally add space somewhere that breaks the class. You can see how now it's not working. So just be
7:15:53
careful. Don't add any spaces. I mean, this is not important. This is just for a cool effect you're going to see in a
7:15:59
second. Uh, and now what I want you to do is I want you to copy this again,
7:16:05
paste it, but without the dark prefix here. And you're going to change the color of this to not be this one, but
7:16:12
instead be da d2. And this can still be transparent. And
7:16:18
then just add another one. background dash size 16 pixels underscore 16
7:16:27
pixels. And now you will see a bunch of dots all over your page. So now let's go
7:16:35
ahead and let's actually develop this. So I'm going to go back inside of my homepage right here and we're going to
7:16:44
do the following. I'm going to remove all of these things here because we're not going to need any of them.
7:16:51
I'm going to well I'm just going to clean the entire thing. I don't even need use client here. I'm going to open
7:16:58
a div and I will add a class name here flex flex column maximum width of five
7:17:05
excel maximum width of auto and width full. I will then add a section with a
7:17:13
class name space Y6 py
7:17:19
of 16 pixels. My apologies 16 VH to Excel will be py 48.
7:17:29
Now inside of here I will add a div with a class name flex flex column and items
7:17:37
center. In here, we're going to render an image from next image with the source of logo
7:17:45
SVG out of Mine width of 50, height of
7:17:52
50, class name of hidden MD block.
7:17:58
Outside of this div encapsulating that image, I will add an H1 build something
7:18:04
with Mine or the name of your project. And we're going to put this heading give
7:18:09
this heading class name text to Excel medium text 5 Excel font bold and text
7:18:18
center. And you should already be seeing something here. Now below this heading
7:18:24
add a paragraph create apps and websites by chatting with AI and give this a
7:18:33
class name of text large medium text extra large text muted foreground and
7:18:40
text center. There we go. And now below that add a div with a
7:18:49
class name maximum width of 3 Excel MX auto and width full and nothing will
7:18:57
appear now. That's because we have to create a new component called project
7:19:03
form. Now the cool thing about project form is that you already built this. You
7:19:10
just don't know it. So what we're going to do is we're going to reuse one
7:19:15
component that we already have and we're going to go inside of modules projects
7:19:20
UI components and in here we have the message form. Now technically we could
7:19:26
modify this message form with a prop. You know I could just pass a prop here like is homepage is landing page and
7:19:33
then we could modify the CSS. But honestly, I would rather keep components separate than creating this magical
7:19:40
components which can be used a million times, right? I'm okay with copying my code if it's for one, two, three
7:19:46
instances. I'm I would rather do that than creating this ambiguous abstract code that's impossible to keep track of.
7:19:53
Right? So, this is what I'm going to do instead. I will copy that message form and I'm going to go ahead inside of
7:20:00
modules and I will create home module. And inside of here UI and then
7:20:06
components and then in here I will create project form.tsx.
7:20:12
And then I will copy everything inside of the projects UI components message form and I will paste it here like this.
7:20:20
And then I will remove the props because we don't need them. And this will now be called project form. There will be no
7:20:27
props for this. the value will still be the same but it will not be creating a
7:20:33
message. It will be creating the project. So this will be called create project.
7:20:39
So let's go ahead and see what we have to do. We will reset the form. Uh actually we don't have to reset the form
7:20:46
and I'll tell you why. Because on success we're going to uh reinvalidate anyway. So let's go ahead and do this.
7:20:53
After we reset the form, the only thing we should actually oh I'm sorry after we successfully create a project, the only
7:21:00
thing we should do is we should call PRPC.pro and we should just refetch get many.
7:21:06
That's the only thing that should happen and then also we should invalidate the usage status. So we can leave this to do
7:21:12
and the same thing for this. But also one more thing that should happen here is that we add router use router from
7:21:19
next navigation. Let me just move this here.
7:21:24
When you successfully do this, let's do router.push and we push to the newly created
7:21:30
project. So that's going to be forward slash projects data
7:21:36
id. As always, we have this data because in the projects create procedure here
7:21:41
when we create the new project and then we invoke a background job, we return that new created project. So we have
7:21:47
access to it right here. Great. So on submit we'll be calling create project
7:21:53
and we don't need the project ID here at all. For the is pending we will have
7:21:59
create project is pending like so we can remove the show usage uh from here
7:22:05
entirely. We don't need it on the homepage. So you can remove this show
7:22:10
usage here like so. Uh what would you like to build can stay the same to
7:22:17
submit? to submit. Honestly, I think everything else here works just fine.
7:22:23
So, yes, just a slight modification here. And now, let's go ahead and use it
7:22:30
inside of our app homepage.tsx. Let's import project form from modules
7:22:37
UI components project form. And I think we also need to add use client here
7:22:43
because it's imported in a server component. So, it wouldn't work. And there we go. This is how it's going to look like
7:22:50
and you can already try it. So, build a landing page. I like to use this example because I think it's super simple and
7:22:57
works almost every time. And there we go. You can see what happens. So, from the landing page, we create a new
7:23:02
project with build a landing page initial message. Perfect. So, if you want to, you can wait for the result.
7:23:08
Uh, I know it's very fun to always see the results. So I I completely understand if you want to, but I'm going
7:23:14
to go back to the project form. And what I'm going to do now is I'm going to show you how you can create some predefined
7:23:20
prompts for the users so that they can easily click on them here. So it's so that they can see the results faster. So
7:23:27
this is what we're going to do. We're going to do this inside of the project form. So in here,
7:23:33
go outside of this native form elements and create a div
7:23:38
with a class name. flex wrap justify center gap 2 hidden MD plex and a
7:23:48
maximum width of 3XL. And now in here what you should do is
7:23:54
you should create something called project templates.
7:23:59
So you can go inside of the public assets folder which you can see the link for on the screen or you can use the
7:24:05
link in the description and in here you can find uh constants.ts. TS. And in
7:24:11
here, I just created a bunch of project templates for you. Uh, and you're going to have to, you know, test each of these
7:24:17
out depending on the model you will use and what works for you and what doesn't because it's a good idea to showcase
7:24:23
your project templates on something that you know will always work with your AI model. Right? So, I'm going to put this
7:24:30
inside of home. I will create new constants. DS and I will paste that here. So basically something like build
7:24:36
a Spotify clone, build an Airbnb clone, build a store page, YouTube clone, file
7:24:41
manager. And I'm just using very descriptive prompts here because it will work better if you give it a good
7:24:48
description. But the cool thing is that you know you have full freedom to improve the prompt in any way. In here
7:24:55
when I select build a Netflix clone, the full prompt will be build a Netflix style homepage with a hero banner. uh
7:25:02
use a nice dark mode compatible gradient here. Movie sections, responsive card, and a model for viewing details using
7:25:08
mock data in local state, use dark mode, right? So, it's a very descriptive uh prompt. But depending on what model you
7:25:15
use, you might be able to do it with just build a Netflix clone, right? It
7:25:21
will just depend on the prompt that you're using and the model that you're using. For example, Claude Sonet
7:25:28
understands uh your instructions very very well. But with OpenAI, I sometimes
7:25:33
have to tell it, you know, if you're using dark mode, make sure you use Next
7:25:38
themes because you have Shhatzen installed, right? I have to tell it uh a
7:25:44
more in-depth about what's going on. So, make sure you have this project templates. And now what you're going to
7:25:50
do is you're going to iterate over them. So, project templates, which I've just imported from dot dot /constants here,
7:25:59
dom. And for each template,
7:26:04
I'm going to return a button component, I'm going to give the button a key of
7:26:11
template dot title. And then I'm going to add some additional attributes to the
7:26:17
buttons. So variant of each will be outline. Size will be small. Class name
7:26:25
will be background white and dark background sidebar.
7:26:30
On click here on select will be called which we don't have yet. So let's just leave it as
7:26:35
empty. And then let's put template emoji. And let's put template title.
7:26:42
And let's see that now. And there we go. So you can see that now beneath this big
7:26:47
input bar uh you can select any of these. So let's go ahead now uh and just
7:26:54
properly space these things out. So what I want to do is I want to wrap my form inside
7:27:01
of a section with a class name space Y
7:27:07
six like so. and just encapsulate all the way to here like that. And then you
7:27:14
can indent the entire thing and now you have a nice space in
7:27:20
between. And now we have to create the ability to actually select this. So for
7:27:25
this I'm going to add const on select content string
7:27:31
form set value content or whatever you use. Let's see. So we use uh value is
7:27:39
the one we use. So set value to be content or you know you can just put
7:27:44
value here. A lot of value. Uh and what's important you do is you enable
7:27:51
all three should to true should validate to true and should touch to true. This
7:27:57
will basically simulate it to be in the same state as if the user actually typed this. So now what you have to do is you
7:28:04
have to add the on select to the buttons. So call on select and pass in the template.prompt
7:28:12
like so. So now when you click on build an admin dashboard there we go you can
7:28:18
go ahead and run this. So I suggest that you try running this and also keep in
7:28:24
mind some of these are larger tasks so they might actually time out right. So
7:28:30
be mindful of that. The good thing about uh ingest is that if it notices a rate
7:28:36
limit, it won't retry immediately. It will it will retry with exponentially
7:28:41
longer pauses between each retry, which if you're using Open AI is perfect because Open AI has reasonable timeouts.
7:28:49
So when you hit a limit in Open AI, they punish you with like 2 seconds of
7:28:54
waiting time. So inest will wait for even longer than that. And if it happens
7:28:59
again, it will wait for even longer. So you don't have to worry. Ingest and OP and I are quite a good combination. Uh
7:29:06
and you can see that with this longer prompt right where I told it, let me just see create an admin dashboard with
7:29:13
stat cards, placeholder, all of those things, blah blah blah. And here it takes a bit of a longer time. You can
7:29:18
see almost a minute. But as I said, you can speed these things up by using a different model. You can create a
7:29:25
smoother prompt, right? A lot of things you can do. So let's just see this result. I'm very curious if it will work
7:29:31
or not. And there we go. So almost the exact same thing as we saw uh in the
7:29:37
initial demo. Amazing. And you can see the code here. Very very good. So I
7:29:43
would suggest that you, you know, try a couple of these and if some are obviously failing, well, you can try
7:29:50
and, you know, fix them in the prompt or you can simply replace them with something simpler because if you're
7:29:55
actually building this as a business, it's a good idea that you, you know, allow the user to select something that
7:30:01
will 100% work, right? You don't want to give them something that might work or might fail, right? Perfect. And I'm just
7:30:10
super interested. Let me just go back here. I want to change this to dark mode. I want to see how this looks like.
7:30:16
Looks pretty good. Great. Uh but I actually prefer working in light mode. So let's go ahead now and let's develop
7:30:24
the bottom part which is the project list. So so far we created the project
7:30:29
form and the layout. Now let's create the project list. In order to do that, we have to go back to our page dsx where
7:30:37
we render the project form and we have to render the project list outside of
7:30:43
this section. So project projects list like this.
7:30:50
And then let's go inside of our home modules here. So home UI components
7:30:56
projects list.tsx. Let's mark this as use client. And let's
7:31:03
import everything we need here. So link from next link and image from next image
7:31:11
format distance to now from date FNS use query from tanstack react query
7:31:21
and use tRPC from TRPC client and button from components UI button. Let's export
7:31:27
cons projects list here and let's start by defining the RPC.
7:31:34
Then let's define data projects to be use query
7:31:39
DRPC projects get many query options
7:31:45
like that and then in here let's return a div with a class name full width
7:31:53
background color of white dark background color sidebar rounded extra
7:31:59
large adding eight border flex X flex
7:32:05
column gap Y 6 SM gap Y4.
7:32:10
Then let's add an H2 element which will just say previous Mines or saved Mines.
7:32:19
I thought it would be fun to call old projects Mines because the project name is Mine, right? You can of course just
7:32:26
say old project, saved projects, whatever you want. So text to Excel and
7:32:31
font semi bold. Later this will say Antonio's Mines or whoever is logged in.
7:32:36
But since we don't have out yet, we can't display that just yet. So now let's just import the projects list
7:32:43
simply so we can start seeing the progress. So right here at the bottom
7:32:48
you should see saved Mines right here. It should look like this.
7:32:55
So now let's go ahead below this and let's create a div with a class name of
7:33:01
grid grid columns 1 SM grid columns three and gap of six and then in here
7:33:10
check if projects.length this should be a question mark so if
7:33:15
projects.length length is equal to zero. In that case, let's display a div with a
7:33:21
class name all span full and text center. And inside a paragraph, no
7:33:28
projects found and a class name text small and text
7:33:34
muted foreground. Otherwise, let's do projects do map get
7:33:40
the individual project here and then return a button.
7:33:47
Give this button a key of project ID, a variant of outline, and a class name
7:33:55
font normal, height auto, justify start, full width,
7:34:02
text start, and the padding of four, and give it an as child prop. Then go ahead
7:34:08
and add a link here with a dynamic href forward slash projects project.
7:34:16
ID and then inside of here create a div
7:34:22
with a class name flex item center and gap x of four. Then add an image here
7:34:29
with a source of logo SVG out of Mine
7:34:35
width of 32 height of 32 and the class name object contain. Below the image,
7:34:43
add a new div with a class name flex and flex column.
7:34:50
Inside of that div they have an H3 element with project.name name inside
7:34:58
and give the H3 element a class name of truncate and font medium and below it a
7:35:05
paragraph using format distance to now which we imported from date FNS
7:35:11
project updated at add suffix true and give the paragraph a
7:35:19
class name text small and text muted foreground and that is it. So in here now you can
7:35:27
see all of your previous Mines. So you can go ahead and visit them. And in here
7:35:32
the source code is of course preserved. Great. So I believe that that marks the
7:35:38
end of this chapter where the goal was to build uh a
7:35:43
the goal was to build uh a landing page and we added the templates, we added the
7:35:49
project list. We added the ability to you know look at this older projects and
7:35:55
I think we did an amazing amazing job here. Obviously there are some things still missing like the navbar but we
7:36:02
will do that later when we add authentication. So, what I want to do in the next chapter is I actually want to improve
7:36:08
the theme of this project because my original theme in the demo was some kind of yellowish color. So, I'm going to
7:36:14
show you how I modify the theme to make it look like that. And I'm super interested in the result of this. So,
7:36:20
I'm just going to wait. Uh hopefully it will work. If not, you know, it's just a lesson that these AI models are a bit
7:36:27
undeterministic. You can't really rely on them too much. But if you spend you
7:36:33
know more than uh I built this app in a span of a month right so I couldn't
7:36:39
really spend too much time learning proper prompt engineering but if you actually use this for your business you
7:36:45
are most certainly going to spend a lot of time on this and you will learn prompt engineering and you will learn
7:36:51
how to improve the prompt and how to fix this little mistakes because in comparison to what you've just built an
7:36:58
app failing is really not a big issue. You can learn how to speed it up. You
7:37:03
can use a new model. Uh you can spend, you know, more credits. You can basically do a billion solutions, but
7:37:10
the boilerplate is here and it's working.
7:37:15
So, for example, you can see that I've gotten an error for this file manager. You might not get an error. Again, it's
7:37:21
a very simple fix. It forgot to add use client to the top of the file. We can see that in the file grid, it was
7:37:27
supposed to add use client, but it didn't. right? Or it should have added it to the page. So perhaps this can be a
7:37:34
very very easy fix. You know, you can maybe tell it inside of the prompt right
7:37:40
here. You can somewhere add a rule that it must add use client.
7:37:48
How about this? Let's add always add use client to the top of page tsx.
7:37:58
So because we are not expecting this to make any API calls right. So then I can
7:38:03
maybe remove this and I can just extend it and any other relevant files which
7:38:09
use browser APIs or react hooks use effect. Okay, I
7:38:18
won't add too many tokens now. But for example, you can do things like this. And I think that already uh this should
7:38:24
work much much better. And I purposely want to retry it now just to see if that will fix. I'm trying to teach you that
7:38:30
you know you don't have to use this prompt. You can make your own prompt. Like I built this prompt and I have no
7:38:36
idea about prompt engineering. I just started very simple and then I extended and I extended and I extended. Right? So
7:38:43
I just added this file safety rule to always add use client at the top of page.tsx
7:38:49
simply because uh if it does that it doesn't have to worry about adding it to the other places. So let's see if this
7:38:56
will fix the problem or maybe some new problem will arrive.
7:39:01
And finally I managed to get it to work. So this was very funny. It actually
7:39:07
failed uh again, right? It forgot to add use client again. But look at this. It
7:39:13
added it but it didn't add it at the top of the file. So you can see how funny these AI models are. Sometimes you will
7:39:20
lose your mind trying to tell it to do something right. So this is what I did. I modified this always add use client to
7:39:28
the top the first line of app page tsx. So this way it understood me and it did
7:39:35
an interesting thing this time. You can see that it understood what I wanted now
7:39:40
and also it decided to create a whole new separate file where it created
7:39:46
everything. I'm not sure why it needed to do that. Um, but let's see what it
7:39:51
created because I think that this is very interesting actually. Can I rename this? Okay, I can't do that. Oh, I can.
7:39:59
One, two, three. Save. Oh, it works. I can rename. I can delete. Or can I? I
7:40:05
can. This is actually super impressive. Can I delete entire folders? Looks like
7:40:11
something's wrong with the models. Keep in mind that sometimes the problems aren't in code, but the problems are in
7:40:17
the iframe, right? Sometimes you might have to visit a live example. Wow, this is actually a very very nice example of
7:40:24
a file manager. But yeah, you can see that I had to struggle a bit with this, right? I got a very good result in the
7:40:31
end. But you know, the prompt can always be better. Again, I'm not a prompt engineer. I have no idea what I'm doing
7:40:37
when it comes to prompt engineering. So, spend some time learning that and you will get even better results than uh
7:40:43
what I am in this tutorial. But I still managed to get extremely impressive results.
7:40:48
Great. So I believe that that marks the end of this chapter now. So 14 homepage.
7:40:55
Let's go ahead and close everything here. And I will go and create a new branch. 14 homepage
7:41:03
like so. I'm going to stage all of my changes and I will create a commit. 14 homepage. I
7:41:11
will commit and I will publish my branch. Perfect. Now, let's go ahead and open a
7:41:18
new pull request here. And let's create a pull request.
7:41:24
And let's wait for the summary to arrive. And here we have the summary. We
7:41:30
introduced a new homepage layout with a visually enhanced background and responsive design. We added project
7:41:37
creation form with template section, validation, and keyboard shortcut support. Basically, a copy of our
7:41:43
message form, right? We implemented project list view showing saved projects with quick navigation and relative
7:41:49
timestamps. We provided a set of predefined project templates for faster project setup. We also fixed the
7:41:56
fragment handling uh to prevent repeated state updates. Exactly. Uh and we also
7:42:02
updated the resizable handle styling for a smoother and more interactive user experience. And it also detected our
7:42:09
prompt change where we clarified the requirement for the use client directive in relevant files. Excellent. So in here
7:42:18
as always we have a more in-depth walk through. In here we have a sequence diagram explaining exactly how all of
7:42:24
those things happen. And in here we have some comments. So it suggests adding some loading states here in the project
7:42:32
list. Uh we could very much do that. We could even leverage our pre-fetching and suspense. We'll see how we're going to
7:42:38
handle that later. And in here, it suggests also adding is dirty check. I'm
7:42:45
not sure if we need that. I think I completed the project without it. So, I think we don't need this. So, I'm going
7:42:52
to merge this pull request here. And after I've done that, I'm going to go back inside of the main branch. And I'm
7:42:59
going to click on synchronize changes. And after that my graph here will update
7:43:05
and it will show me that pull request 14 uh was just merged. Amazing amazing job.
7:43:11
I believe that marks the end of this chapter and see you in the next one.
15 Theme
7:43:18
In this chapter we're going to learn how to change the theme of our project and
7:43:23
I'm going to show you two ways you can do that. The first one is to simply visit my public assets folder or if you
7:43:30
have access you can use the source code. Basically just visit the link you can see on the screen or the link in the
7:43:35
description and from in here you can find globals.css
7:43:40
and in here you can click copy or you can you know manually select and copy things and then go inside of your source
7:43:49
app globals.css ensure that you are on your main branch
7:43:54
and you can synchronize changes if you aren't sure. Make sure that the last merge was 14 and simply replace the
7:44:01
entire globals CSS file. So in here uh
7:44:07
alongside changing all the colors, this will update as well. This is basically
7:44:12
what enables button to have a cursor pointer just in case you were wondering.
7:44:18
So this is new and basically the colors were modified. And if you take a look at
7:44:23
your app now, you will see that we have this new orange color. And if you go to
7:44:28
the dashboard, you will see that it's more of a yellowish color. So this is the one that I like. But I want to show
7:44:35
you exact place where I found this and how you can create your own uh CSS
7:44:43
theme. So for now, what I'm going to do is I'm just going to revert this simply so it is the old global CSS. You don't
7:44:51
have to, right? If you like the theme, you can copy from my uh GitHub assets,
7:44:57
you can use it. But let me show you how I even found that theme. I basically
7:45:02
used tweak cn.com. Again, you can use the link in the description or the link you can see on the screen. And in here,
7:45:09
you can go inside of try it now. And you can basically click here and find a
7:45:15
bunch of different themes for UI. And I think it is super cool. And the one I
7:45:21
selected was cloth, right? And in here you can check how it looks in light mode and how it looks in dark mode. I think
7:45:28
this is an amazing project. It has so many themes you can try from. So I
7:45:33
purposely want to pick uh some theme that I haven't tried before. Let's see
7:45:40
how about I try this claymorphism. So the way you would do it is you would click on code and in here you can see
7:45:48
that they are taking care of Tailwind versions right so I would take Tailwind version 4 and if you want to you can
7:45:55
just use the CLI to do it but you can also just copy this and then you will
7:46:01
have to replace your root your dark and theme inline. So let me
7:46:08
show you how you would do that. So starting from the theme inline root and dark, we select all of these and you can
7:46:16
remove them. So this is how the global CSS looks now. And you just paste the new one here. And that changes the
7:46:23
entire look of your app. As you can see, it looks very different now. Right? So if you like this one, you can use this
7:46:30
one. Right? I personally like the look of Claude. So I'm going to select Claude
7:46:38
right here. code uh code and I will click copy and then the same thing you basically select
7:46:46
the root the dark and theme inline and you can delete it. So this is how it
7:46:52
should look like and paste your new ones here and then your app should look like this. I think this is a very very nice
7:46:59
look. Uh and it has nice borders. Everything just looks nice with this
7:47:04
style. Again, I don't know how well this website will be maintained. I don't know
7:47:10
if this will be available, you know, 2 years from now. I hope it will because it's an amazing project. But then again,
7:47:16
Shhatzen can update a lot and they will probably update the app accordingly to that. So, because of that, I am offering
7:47:22
you my globals.css which you can copy from the source code or the global assets and just paste the
7:47:30
entire globals.css inside. And if you're using this my globals.css, you will
7:47:37
notice that now buttons have cursor pointers. They look clickable, right?
7:47:42
Each of these buttons look clickable. That is because of this part. Let me show you this one. So if you don't have
7:47:50
this u it will not come with uh tweak CN. So it doesn't come with this. I added this myself in my global CSS. So
7:47:59
basically this is a way to enable cursor pointer for all buttons which are not disabled. So you can add this little
7:48:06
snippet if you want to and then your buttons will have proper uh cursor
7:48:11
pointers. I just think that this looks way better than everything than anything else. Right now let me try and go to one
7:48:19
of my previous projects where I have a lot of fragments. You can see how now fragments look clickable. Right? They
7:48:26
have a proper cursor on them. Great. I am super satisfied with this one. So, I will leave it at this. And while we are
7:48:34
here, there is just one more thing I want to do. So, just go in any of your projects and let's go ahead and do the
7:48:40
following. Select your theme. I would recommend using my global CSS and then
7:48:45
later at the end of the project, you can modify it to whatever theme you like, but it will be easier for you to have
7:48:51
the exact same result as me. So, that's why you can use my global.css. Keep in mind that this is for let me show you
7:49:00
next version for next 15.3.4 four, right? So, if you are watching this two
7:49:07
years from now, I have no idea if it will work for you and whatever is the latest version, but if you're using a
7:49:12
similar version like me, uh or if you're using the exact version as me, it will work. Great. So, now let's go ahead and
7:49:21
do one more thing. Let's go inside of our button inside of source components UI button. And in here, I want to add a
7:49:29
new variant called uh terriiary. I don't know how to pronounce this to be
7:49:35
honest. I never I always mess this up. But basically, it's going to be background primary with 25% opacity. In
7:49:43
dark mode is going to be BG primary again, but 30% opacity. Text will be
7:49:49
primary. Shadow will be extra small. Hover will be BG primary 20.
7:49:57
BG primary 20. And on dark mode, hover will be BG
7:50:03
uh let me just check on dark mode hover will be BG primary
7:50:09
25%. And now go inside of your project view here
7:50:14
and in these tabs find the upgrade button and give it a variant of this
7:50:22
new one. However you pronounce this, right? And then when you look at it, it will
7:50:28
look like this. It's a kind of uh lighter version. And let me switch to dark mode and still looks good. And of
7:50:35
course, check your app in dark mode to see it looks fine. I very much like this
7:50:40
look of the app more than all the other themes, but you're of course free to choose your own. And I like how this
7:50:46
becomes orange now when you resize your panels. Uh great. So this was a very
7:50:53
very easy chapter. So let's go ahead and just quickly merge this. So mark this as
7:50:59
complete and 15 theme. I'm going to open a new branch here. Let me just see what
7:51:06
did we all change. We'll change this to 30 this new variant here. And we changed our theme overall. So I'm going to
7:51:14
create a new branch 15 theme. I'm going to add all of the
7:51:21
changes. 15 theme. I'm going to commit and I'm going to publish the branch. And
7:51:26
there's really no need for any review because this was a super simple uh change. So I'm going to immediately
7:51:33
merge this pull request. So we speed things up. There we go.
7:51:40
So just three simple changes and we can immediately merge it. We don't need to wait for any review this time. It's much
7:51:46
simpler. And after that's done, let's go inside of main and let's synchronize our
7:51:52
changes. And then your last merge here should be 15 theme. Amazing amazing job
7:52:00
and see you in the next chapter. In this chapter, we're going to add
16 Authentication
7:52:06
authentication to our project. This will include creating a clerk account,
7:52:11
setting up clerk, creating the necessary components to display the authenticated state, creating protected TRPC
7:52:18
procedures, and updating the Prisma schema. Let's start by creating the
7:52:24
clerk account. You can use the link you can see on the screen or the link in the description.
7:52:29
And once you get to the landing page, you might see something interesting in here where they mention the companies
7:52:36
that use clerk. You can actually find injust the company that we are using for
7:52:41
our background jaws. And you can confirm that yourself by going in their signin screen and searching for clerk inside of
7:52:49
their network tab. And in here you can see that they are actually making requests for clerk. And I just think it
7:52:54
is super interesting that such a uh great company uses the same authentication system that we are going
7:53:00
to implement in our project right now. So let's go ahead and do that. Once you create your account here, you will be
7:53:07
redirected to the dashboard. And in here you can click create application. I'm
7:53:12
going to call this application Mine. And I'm going to enable email and Google. You can of course enable all of these
7:53:19
other providers if you want to. And I will click create application.
7:53:24
After we do that, we have to install the Nex.js clerk package. But just before
7:53:29
you do that, ensure that you are on your main branch. Ensure that your last change was 15 theme and that you have
7:53:36
synchronized all of your changes. Now let's go ahead and let's run npm
7:53:41
install lurk nex.js. And once it's been installed, I'm going to show you the
7:53:46
exact version that I will be using, 6.23.0.
7:53:52
Now that we have that, let's go ahead and add the environment variables to our environment file. So, I'm going to go
7:53:59
ahead and add clerk and paste these two. I like to wrap them in parenthesis, but
7:54:04
I think this might depend on the system. I think Windows might have problems with this. Uh, but I think maybe even not. I
7:54:12
think all of these will work just fine. But yeah, in case you were wondering, I
7:54:17
like to wrap them in parenthesis. They don't have to be in parenthesis. So, all of these could actually be without
7:54:23
parenthesis if that's something you prefer. I just feel like the syntax looks better with parenthesis.
7:54:31
Uh, I keep saying parenthesis, I mean quotes. Sorry. Uh, okay. Now, let's create our middleware file. So, that's
7:54:38
going to be inside of the source folder. Create middleware.d DS. Make sure to not misspell this. Middleware.ds.
7:54:46
It's a reserved file name. We import clerk middleware from clerk next.js server and we export default clerk
7:54:52
middleware middleware and we add a matcher. So, uh, we target all of these files here.
7:54:59
Excellent. So, now that we have this, let's go ahead and let's add the clerk provider to our layout. So, I'm just
7:55:06
going to import clerk provider to our root layout. So app folder
7:55:12
layout. Let's go ahead and import clerk provider from add clerk next.js
7:55:21
and I'm going to wrap the entire application inside of a clerk provider. Yes, make sure you wrap your TRPC React
7:55:28
provider inside of clerk provider as well. Like that. So let me just confirm that I use the correct package and just
7:55:35
confirm that they've done this as well. Perfect. And now let's go ahead and
7:55:40
let's do npm rundev here. You don't need to start your uh ingest right now
7:55:48
because we will be doing some other things. So what I did is I went to the end here and I clicked on next steps.
7:55:54
Utilize your own pages for authentication. The account portal is the fastest way to add authentication.
7:55:59
So let's click continue to the next GS guide. And the first thing we're going to do is we're going to add this uh sign
7:56:06
in pages. So let's go ahead and do that. I'm going to go inside of source app
7:56:13
home here. And now I'm going to create a new folder called sign in. And then
7:56:18
inside I will create another folder which will use the catch all route sign
7:56:23
in like this. It needs to be exactly like this. And then page.dsx inside. And
7:56:31
now let's go ahead and let's import sign in from clerk nextjs and let's do a page
7:56:41
export here with a div which will have a class name of flex flex column maximum
7:56:49
width of 3 excel mx out and width pool and then let's add a section which
7:56:58
includes a class name space Y 6 padding top of 16 VH and to Excel padding top of
7:57:07
48. Inside of this section, add a div with a class name flex flex column items
7:57:16
center. And inside of here, render sign in. Whoops.
7:57:23
Sign in like this. And once you've added this, you can go ahead and copy this and
7:57:31
you can add sign up here like so. And then change this to be sign up as well.
7:57:38
Go inside of the sign up page and replace sign in import with sign up import.
7:57:45
And then let's go ahead and do the following. So we're going to set this to be public
7:57:52
route. So, we are going to go inside of our middleware.ts.
7:58:01
We're going to import create route matcher right here. And we're going to define a
7:58:06
constant is public route using create route matcher. And we are going to
7:58:12
target sign in. And then we're going to change this
7:58:17
expert default clerk middleware to include an arrow function which checks
7:58:23
if the current request is not a public route and then it will redirect to the
7:58:29
protect page. And then what we have to do is we have
7:58:34
to modify our environment variables. So let's go ahead and go inside of
7:58:40
environment variables here and let's add that next public clerk signin URL is
7:58:47
forward slash signin and the fallbacks will be an empty forward slash. So next
7:58:53
public clerk sign in fallback redirect and next clerk sign up fall back redirect urls. Perfect. And now I think
7:59:01
that already you should be able to see this. If you go to localhost 3000, I think you should immediately be
7:59:07
redirected to this page, right? And if you try to visit any other page like try
7:59:13
to visit some older project like projects 1 2 3, you get immediately
7:59:19
redirected back to the signin page. So all pages are now protected. We are of
7:59:24
course going to slightly modify this by going inside of the middleware and let's
7:59:29
modify this array of public routes to also include a forward slash and I like
7:59:36
to use these types of quotes and we also uh actually yeah I think this uh
7:59:46
we also need forward slap API inest
7:59:51
like this. So make sure you add this otherwise background jobs will not be able to work. So we need to allow inest
7:59:58
to be contacted. Great. So once you've done this you should now be able to visit the
8:00:04
localhost 3000 page. There we go. You can see that now we can visit this but we still can't visit the individual
8:00:11
project page. So uh and yes I am in dark mode. You might be in light mode. It
8:00:16
doesn't matter. So now let's go ahead and do the same thing that we did.
8:00:23
Let me just go here. The same thing that we just did for sign in. We are now going to do to the sign up page. So we
8:00:30
just did this. So we don't have to do it. I told you like already that you can just copy the sign in and do it right
8:00:37
here. But what we need to do is we need to add sign up to the list of our public
8:00:42
routes. So let's see. Did we do that or not? We didn't. So let's add it.
8:00:48
There we go. So sign up is now added to the list the same as sign in. And then
8:00:53
we also need to add all the environment variables here. So let's go inside of environment here. And let's just add
8:01:00
some so next clerk next public clerk sign up URL
8:01:06
and the redirect URLs for sign up fallback and sign in fallback.
8:01:12
And looks like these are duplicates. So yeah, I think you only need one of these
8:01:18
and one of these. So yeah, you can do remove these two and just move these two. There we go. At least I think that
8:01:25
they were duplicates, right? I think they were. Uh, and now you should be
8:01:30
able to go uh manually. You can just enter any other route. Try going to
8:01:36
projects one to three. You will be redirected. And if you click sign up, you should be taken on the same layout.
8:01:42
As you can see, it loads the sign up page. So now you can switch between the two. Perfect. Uh so now what I want to
8:01:50
do before we even log in, I want to go back to localhost 3000 here and I want
8:01:57
to create a navbar. So let's go inside of our home module.
8:02:04
So that's going to be inside of source modules home UI components. And in here,
8:02:13
go ahead and create navbar esx. Let's go ahead and mark this as use
8:02:19
client. And let's import link from next link. Let's import image from next
8:02:25
image. Let's import all of these from clerk next.js. Signed in, signed out,
8:02:31
sign in button, and sign up button. And then let's import button from components
8:02:37
UI button. Let's export con navbar here and let's return a nav element.
8:02:45
Give this nav element a class name of padding 4, background color transparent,
8:02:51
fixed top zero, left zero, right zero, zindex of 50, transition all, duration
8:03:00
200, border bottom, and border transparent.
8:03:06
Inside of this div uh nav add a div with a class name of maximum width 5 xl mxal
8:03:14
width full flex justify between and items center.
8:03:22
Add a link inside with an href to a forward slash with a class name of flex
8:03:29
item center and gap of two. And in here render an image with a source
8:03:37
of logo SVG out of Mine width of 24 and
8:03:43
height of 24 as well. Add a span with a
8:03:49
text Mine inside. Add a class name font semibold and text large like that.
8:03:57
And let's go ahead and let's go inside of our layout in app folder home layout
8:04:06
and let's render it just so we can start seeing some results. So navbar
8:04:11
from modules home UI components navbar and you should now see the Mine right
8:04:17
here at the top and the fun fact it should also appear if you go into out
8:04:24
screens as well as you can see. So now you can always use it to quickly go back. So now let's continue developing
8:04:31
the navbar here. The first thing we're going to add after the link is we're going to add signed out state like this.
8:04:38
And then inside add a div with a class name flex gap 2 and add
8:04:48
sign up button and add a normal button inside with a
8:04:53
variant of outline and a size of small
8:04:59
and render sign up inside. You can copy this and then
8:05:05
change this to sign in button. This one will say sign in and this one won't have
8:05:12
the outline variant. It will just have a size small. So there we go. Now you have sign up and sign in buttons that you can
8:05:19
access only if you're logged out of course. And
8:05:24
then if you are signed in let's just add a paragraph to do user control.
8:05:32
And now we should be ready to log in. So I'm going to click sign in here and I'm
8:05:38
going to continue with Google. And once you confirm your Google login,
8:05:44
you will be redirected back here. And you should be redirected on the landing page with the text to-do user control
8:05:52
like that. And you can see how now we can also load these apps. So, the reason they previously weren't even loading uh
8:06:00
is because in the middleware, we didn't allow the TRPC to be a public route. So,
8:06:08
in my case, I'm not going to have any public TRPC procedures. But if you want
8:06:13
to, you can also add TRPC here like this. Let's just fix this TRPC. And
8:06:21
then if you well, you can't log out now. So, let's just create a component to log out now. and then I will demonstrate
8:06:26
this. It's completely fine to add this here because we are going to protect TRPC routes based on their procedure
8:06:33
type as well because right now if you wanted to have any public API routes they don't exist. We prevent any
8:06:40
anything other than this to be a public route. Uh also you can create the exact
8:06:46
opposite right you can call this is private route and then all of these will
8:06:51
be private routes right and then you would just modify your logic you would remove the exclamation point and you
8:06:57
would do this so if you have the majority of the public routes and minority of the private ones you can
8:07:04
just reverse the logic of the clerk middleware that's the cool thing about this it doesn't have to right we just
8:07:09
called this is public route we could have called it anything and we could just put private routes inside and then
8:07:14
use the reverse logic here, right? It's not like you need to add the public ones
8:07:20
here. So, this is especially useful if you have a bunch of public routes, then just do the reverse logic, you know.
8:07:27
Great. Now, let's add the user control uh component. So, I'm going to go ahead and close
8:07:34
everything. I'm going to go inside of source components and I will create user control. DSX. I will mark this as use
8:07:42
client and I'm going to import user button component. Here I will export
8:07:48
const user control
8:07:53
and I will create an interface props here to show name which is an optional
8:07:58
boolean and in here I will add the props and show name.
8:08:05
Then in here I'm going to return the user button component which is a self-closing tag.
8:08:10
And I will modify well first I will pass the show name prop and then I'm going to
8:08:16
modify the appearance prop to include the elements and then get the user button box to be
8:08:24
rounded medium with an exclamation point at the end which basically means important
8:08:29
user button avatar box rounded medium with size eight
8:08:37
eight and user button trigger rounded medium like so.
8:08:44
So I don't have to type this any every time I have uh created it in a component
8:08:50
like this. So now let's go back inside of our navbar and inside of signed in
8:08:56
render user control and pass in show name prop. So just make sure you have
8:09:02
imported user control and there we go. Uh, and in here you now have this uh
8:09:08
name which is barely visible because I'm in dark mode. Don't worry, we're going to fix that as well. But from here you
8:09:15
can access your entire account, your security, uh, all of those things and
8:09:20
you can also sign out from here. And you can see that now since I enabled inside of my middleware TRPC, I can fetch them,
8:09:29
right? But if I remove this and refresh, I'm not able to fetch them because all
8:09:34
the network requests for TRPC are failing. As you can see, all of them
8:09:41
are failing. But we will protect our TRPC routes in a different way. So it's
8:09:46
completely okay in my opinion to allow this. In fact, you can even just allow your entire API like this. then you
8:09:54
don't have to worry about injust or DRPC specifically because our API should uh
8:10:01
it should be protected in a different way in the first place. Let's just do a sanity check. What do we have here? We
8:10:07
have ingest and we have uh TRPC. So inest needs to be publicly available
8:10:12
simply because inest will contact this no one else. Right? And if you're
8:10:18
wondering how this works, they probably have some kind of uh security header which is checked every time you access
8:10:23
this route because you can see that we're using the serve from ingest next. So inside of here, they probably have
8:10:29
their own request handler that does all the security features inside. And as for
8:10:35
TRPC, uh well, we are going to be the ones who are going to have to protect
8:10:40
each individual route here. And that's what we are going to do with the protected procedure. So I would actually
8:10:45
recommend allowing all API endpoints to be public routes. So now let's go ahead
8:10:52
and let's uh create the dark mode for this because you can see that when I log
8:10:58
in of course it just looks weird. So what we're going to do is we're going to
8:11:03
go and create a hooks folder. So go inside of source. Uh do we we
8:11:09
already have hooks? Great. So this came with chats and UI. And now create use
8:11:15
current theme.ts. So we already have use theme from next
8:11:23
themes and we already use it in the project header use theme. The problem
8:11:28
with this is that it has uh the following possible values. It can be
8:11:35
system dark or light which is fine for this radio group. But if the value is
8:11:42
system, what exactly is that? Is it light or is it dark? We
8:11:48
don't know. That's why we have to create a custom use current theme here
8:11:55
where we can extract the theme and system theme. Specifically
8:12:02
use theme like that. And then if theme is dark
8:12:08
or if theme is light, we can just return the theme as usual. Otherwise, return
8:12:16
the system theme like that because you you cannot always just
8:12:24
return the system theme. This only makes sense if the theme is system, right? If
8:12:31
it's dark or light, then we don't care. we can just return whatever the value is. But if it is something other than
8:12:36
dark or light, it means it is system. So then we cannot return theme. We have to return the actual value of the system
8:12:43
theme. And now we can go inside of the user control right here. And we can
8:12:49
adapt it as follow const current theme
8:12:56
use current theme like this.
8:13:02
And then inside of here, uh, let's also import. I think we need to install a
8:13:08
package first. So, let's just do npm install at clerk forward slash themes.
8:13:15
And I'm going to show you my package json here. 2.2.51
8:13:21
is my version. And then from that package, you can now import
8:13:27
dark from clerk themes. And then very simply in the appearance here set the
8:13:34
base theme to check if current theme is equal to dark use dark otherwise use
8:13:40
undefined. And now you can see the text is visible and this is now in dark mode.
8:13:48
So you might be thinking could I have just added that to the clerk provider because clerk provider also allows for
8:13:55
the appearance and base theme. Well, you can, but the problem is the theme
8:14:00
provider for SHAT CN needs to be inside of the body and clerk provider needs to
8:14:06
be outside of the HTML. So, we kind of have a conflicting situation here,
8:14:13
right? Um, you can try moving both the clerk provider and TRPC react provider
8:14:20
here maybe, but I'm not sure how that works, right? Uh I'm not sure if it
8:14:26
matters but uh from all the documentation I've seen these two need to be outside of HTML. I'm not sure I
8:14:33
could be wrong but basically if you are able to move these two like this inside
8:14:40
then you can create an abstraction around cleric provider and then you can do the same thing like this. But for now
8:14:48
I'm going to leave it like this simply because this is what worked for me initially. Great. So we now have this in the user
8:14:55
control and we can now go inside of sign in and do the same thing because right
8:15:01
now if I sign out and if I go here you can see that this uses light mode. So
8:15:07
let's go inside of sign in page right here. Let's go ahead and mark this as use client
8:15:14
and let's import use current theme from hooks use current theme which we just
8:15:20
created. And let's import dark from clerk themes. Now in here we can extract the current
8:15:26
theme and for this sign in let's add appearance here
8:15:32
base theme we'll check if current theme is equal to dark and use dark otherwise
8:15:38
use undefined. And let's also modify the elements a bit by adding card box here.
8:15:43
Do not have any border, not have any shadow and be rounded for LG
8:15:52
like this. And there we go. You can see how now this is in dark mode. And when you click on sign up, you can see it
8:15:58
still uses the old theme. So let's just go ahead. We can just copy the entire file, go inside of sign up, paste the
8:16:05
entire thing, and replace the import to be sign up. I think that's faster.
8:16:11
And there we go. Now both of our sign in and sign ups have the proper team.
8:16:17
Great. So let's see where we are. What did we do? We created a clerk account.
8:16:23
We updated updated our environment. We added clerk provider signup screens
8:16:28
middleware. Perfect. We added home layout in the navbar. We created the user control component. Now let's create
8:16:35
protected tRPC procedures. and let's update the Prisma schema.
8:16:41
So I just want to do one more thing with the user control component and that is
8:16:46
inside of the project view. So go inside of this component here and in here after
8:16:52
the tabs list here we added this ML auto flex and this button to upgrade. Now
8:16:59
next to it also add user control like this and don't add the prop show
8:17:05
name. So just make sure that you imported user control and let me show
8:17:11
you how that will look like now. So now if you of course sign in. So let me just
8:17:18
enter an account here and let me just go to uh any random
8:17:25
project here. You can see that I have my user button right here. And let me just switch to
8:17:31
light mode to see everything still works fine. There we go. You can see that now I can log out and access my account
8:17:37
information from here as well. And let's just double check the light mode to see everything works fine. Everything works
8:17:44
just great. Perfect. So now what we have to do is we have to create the protected
8:17:49
TRPC procedures. So in order to do that, let's go inside of source tRPC
8:17:56
and let's go inside of init. And now in here, we're going to modify the TRPC
8:18:02
context here. So what I'm going to do is I'm going to remove this comment
8:18:07
and I will return al to be await out from clerk next.js
8:18:15
server. After that, I mean just below it, I'm going to
8:18:20
export type context which uses awaited return type type of off create trpc
8:18:26
context. And you can actually find these exact instructions in clerk documentation here. Let me just find
8:18:33
tRC. Maybe I can find it. Integrate clerk into your next.js plus tRPC app.
8:18:38
Let me see if that is uh what I'm looking for here.
8:18:43
Let's try again. TRPC I think this might be it. So yes, you
8:18:49
can see that they instruct you to wrap the clerk provider around the TRPC provider. So we already did that, right?
8:18:58
We are using TRPC React provider simply because the documentation has changed since then, but it's the same thing.
8:19:04
It's important that the clerk provider is wrapping around the TRPC provider. And now in here we are basically doing
8:19:10
this in the create context and we are creating the context type
8:19:15
here like that. And in here you can find all the other things that we are going to do. Uh for example they have a
8:19:22
specific instruction to now add create context to this TRPC route. But if you look at the TRPC route
8:19:30
we already do that right? So you don't have to worry about that. You can just follow what I do now. So I'm going to go
8:19:38
after this T initialization and I will do const is outped like so and I will do
8:19:45
T dot middleware and from here the structure next and
8:19:51
context and check if not context out user ID
8:20:00
in that case throw new TRPC error code.
8:20:07
Uh let me just see what exactly is the problem in this one. Oh, so I need to
8:20:14
import TRPC error from TRPC server. Okay, make sure you do this.
8:20:20
Then let's do unauthorized here with a message of not authenticated
8:20:27
like that. Nothing. uh and then after this if clause return next
8:20:34
and extend the context to include out. Now we have to fix this problems that
8:20:41
out doesn't exist. You can do that quite easily by going back to this t here and
8:20:47
simply add dot context add the context type and execute it. And
8:20:54
you can see that now we have the al property here which we added here.
8:21:00
Perfect. And it's important that we also cache this in React. So this doesn't need to be called every single time. And
8:21:08
we are simply relying on the user ID from it here. So make sure you don't do any mistakes here because now we're
8:21:14
finally going to go ahead down here and do export const protected procedure to
8:21:21
be t.procedure. Whoops. T.procedure.
8:21:26
is authored. There we go. Now we have our protected
8:21:32
procedure. So now it's time to replace a lot of our
8:21:37
previous uh well procedures with this new one. So thankfully we don't have too
8:21:44
many modules. So let's start with the messages procedures here. Let's see. At
8:21:49
first we have get many instead of base procedure. What you can do is honestly I
8:21:55
don't think there will be a single public procedure here. So what I like to do is I like to highlight base procedure
8:22:01
and then I press command D or control D and then this just selects all of the
8:22:07
other ones. Right? So 1 2 3 and I can remove them and I can add protected
8:22:13
procedure like this. And nothing really changes
8:22:18
now. So I'm just now using protected procedure for each of these for get many for create and I think that's that's the
8:22:26
only two instances and you might think but nothing really changed now that's
8:22:31
right but look at this if I'm using so just for example I will bring back base procedure here for the get many I'm now
8:22:38
using base procedure if I try to extract context from here and if I try to do uh
8:22:45
let's for example imagine that we can query the messages by user ID. Imagine
8:22:51
if I do user ID here and do context. And then I try to do you know user ID in
8:23:00
here. It can tell me that the user ID is string or null. So that means what I
8:23:05
have to do is I have to first check if there is no context.out user ID and then
8:23:10
I have to throw new tRPC error blah blah blah. But that makes no sense. we just
8:23:17
created the protected procedure which does that for us and then uh passes the
8:23:23
context further. So instead what we do when we know that something has to be a
8:23:28
protected procedure that we will always throw an error if the user ID is missing we can now just use the protected
8:23:34
procedure and this time the user ID is a type of string. see the difference. Base procedure tells
8:23:42
me it can be string or it can be null. But protected procedure tells me this is
8:23:48
definitely a string because it 100% exists at this point. So that's why
8:23:54
we're replacing things with a protected procedure. And then at this point it
8:23:59
doesn't matter that our API is allowing the public route for API. Right? An
8:24:06
important thing you should know, you should never never ever ever rely on the
8:24:12
middleware for authentication. So what I'm doing here is just a nice
8:24:19
user experience, right? It is easy to redirect the user using the middleware.
8:24:25
But this isn't my line of defense. This isn't what I'm doing to throw
8:24:30
errors. That's why I have a data access layer called TRPC. And in here I have my
8:24:36
protected procedures. So if this middleware fails even even in this case
8:24:41
I explicitly allow the middleware to allow API routes. I'm still very much
8:24:48
protected because I'm protecting my data access layer and you should do the same.
8:24:53
Never ever rely on the middleware to protect your app. If you want to use the
8:24:58
middleware for nice user experience like we are, of course you can do that. But it shouldn't be your last line of
8:25:05
defense. You should have a data access layer and you should protect your routes
8:25:10
individually because let's imagine this middleware breaks which can happen.
8:25:15
Nex.js had a middleware security issue just a few versions ago and people who
8:25:22
were shocked that that happened know got a very big security lesson. You shouldn't rely on the middleware. Even
8:25:29
if the middleware was perfect, you should not rely on it. Uh don't confuse
8:25:34
this middleware with this is also technically a middleware right we we
8:25:40
just created a middleware this middleware and this middleware are two different things they are not comparable
8:25:46
okay what I'm trying to tell you is don't try and do API and then projects
8:25:52
and then create don't do this this is not enough for you to protect your API
8:25:58
routes you should protect your API routes inside of the routes themselves like I
8:26:05
am doing right now. So this is a different type of middleware. They're just using the same word. They're using
8:26:11
the same keyword middleware here and middleware here. Right? I'm trying to explain the difference. So whenever you
8:26:19
use the middleware, it should only be used to improve user experience like adding redirects which is very a very
8:26:26
nice thing to use the middleware for. But if your middleware breaks and if the user actually ends up being able to
8:26:33
visit my individual project page, I'm still just going to throw a bunch of
8:26:38
errors because when we try to load the messages, it will be a protected procedure and it will just throw the
8:26:44
user an error saying, "Hey, you're not authorized. I don't know how you access this API, but you cannot see that API."
8:26:52
That's how authorization should work, not by the middleware. The middleware is just the first layer of security. The
8:27:00
actual layer of security is the data access layer. In our case, the RPC. I
8:27:05
hoped I cleared that up. Sorry for going on this rant, but it is important for you to understand that. Great. So now
8:27:13
let's go ahead and once we finish the messages, let's go inside of projects server procedures. And I think that we
8:27:18
have to do the very same thing here. I don't see a single thing that can be a base procedure here. So I'm just going
8:27:24
to replace All of these instances I think this is the last one. Yes, with
8:27:31
protected procedure. So let me show you the exact changes. Get one, get many,
8:27:37
and create. So three procedures in this case. And when I search for base
8:27:44
procedure now, not a single one exists except the actual instance here in the
8:27:49
init file. And when I search for protected procedure, I have eight results in three files. the third one
8:27:56
being in it file. So that's how your project should look as well. So now only
8:28:03
authorized users can access this API routes and it absolutely doesn't matter that we are not protecting it in the
8:28:09
middleware. Perfect. So now let's go ahead and let's
8:28:14
add Prisma schema update because now we finally have the user ID. So that means
8:28:21
we can go inside of Prisma schema here and we can modify
8:28:28
some things. So let's start with the project. The project from now on will
8:28:34
have a user ID which will be a required string like this.
8:28:41
And since other entities relating to the project, all other entities end up being
8:28:47
related to the root project. We don't really have to add it to the message as well. You can of course do that if you
8:28:55
want to uh if you have any architectural reason for doing that. Of course, you
8:29:00
can add individual user ID for the fragment, individual user ID uh for the
8:29:05
message, right? But for the same reason I'm not adding project ID into the fragment because the fragment is related
8:29:12
to the message which has the project ID already. I'm not going to be adding the user ID uh to my uh other entities
8:29:19
because it is enough that the user ID is in the project. And once I've done that
8:29:25
I'm going to shut down my app and I'm going to do npx prisma migrate reset. So
8:29:31
again only do this in development. We are clearing up our database because we are in development and we can do that.
8:29:38
And once we've done this, let's go ahead and do npx prisma migrate dev. And once
8:29:44
it connects, let's simply call this user ID or out.
8:29:49
Here we go. I'm going to call this user ID. And there we go. Now I'm going to do
8:29:55
npm rundev. And I'm going to run npx inest cli latest dev. So both things
8:30:01
should be running. And just double check that it was able to connect to API inest
8:30:07
because as I said if you accidentally don't allow your API here then inest
8:30:14
will not be able to connect. There we go. You can see that now it's 404. So that's wrong. That's why you need to
8:30:21
make sure to allow all of your API routes and then after some time let's check again. It can connect to it.
8:30:28
Exactly what we need. So now let's go ahead and fix all of the issues that we have because we do have them. We just
8:30:35
got a new rule and that is that each project needs to have a user ID. So
8:30:41
let's go ahead inside of our modules and let's go inside of projects server
8:30:48
procedures and we can already see some errors here such as the create error. So
8:30:54
in the create protected procedure we now have to also pass the user ID which we can easily extract from the context here
8:31:01
because we are using a protected procedure. So context.out user id as
8:31:07
simple as that problem fixed. Now what we have to do next is you also have to
8:31:13
modify the get many. So whose projects are we loading? Very simple. The
8:31:18
currently logged in users projects. So let's add a wear here.
8:31:24
like this user ID matches context out user ID and
8:31:30
now we are only loading this currently logged in users project and same thing
8:31:35
for get one simply extract context from here and we can only load the existing
8:31:40
project if we have a matching user ID if we don't this will be null and we're
8:31:48
going to throw the error not found so even if the user is logged in and manages to surpass this protected
8:31:55
procedure, we will still be able to throw the error because we have no idea
8:32:00
which project with that specific ID and that user ID they are looking for. So we
8:32:05
just throw we have no idea what you're talking about. We've never seen that project before. So full security in our
8:32:12
application. And now we have to do the same thing but for messages. So let's go
8:32:19
inside of procedures here and let's check get many. So in here I'm going to extract the context as well and I'm
8:32:26
going to try and do project user ID and it seems like I can do that. So let's simply add context out user ID. There we
8:32:34
go. So just like that we are now also protecting all of our messages. But since we don't have direct user ID in
8:32:40
the message we have to go through the project ID first. Perfect. And for the create uh well we
8:32:48
have to do the same thing but a little bit differently here. So what we're going to do here is we're going to do
8:32:53
con existing project first await prisma project find unique where
8:33:02
and simply add the ID to be input project ID and user ID to be
8:33:11
context pal user ID like this.
8:33:18
I mean maybe we can somehow do it from here. I don't know. I'm not that good
8:33:23
with Prisma, but you can do it in two separate queries. You know, it's not the end of the world. And if there is no
8:33:29
existing project, let's throw new TRPC error here code not found with a message
8:33:39
project not found. So I have no idea what where what project do you want to
8:33:46
create this message into. Right? And make sure you have imported the TRPC error from TRPC server. So this way,
8:33:53
even if they somehow surpass the protected procedure, we are still not going to allow them to just create
8:34:00
messages in someone else's project because they need to match the exact user ID who created that project. Uh
8:34:07
great. So we now have this done right here. And then we can safely do the
8:34:13
created message. You can even then use maybe it's even safer to use existing project ID for the project ID. So it's
8:34:20
only this one which we can query from our database with the correct user ID that we're going to insert this message
8:34:26
into. Excellent. And you don't have to worry about these background jobs because we
8:34:32
are protecting them before we even trigger them. So that is for the create method. Let's
8:34:39
see. Did I fix it for the get many? And I think that should be it. So obviously
8:34:44
we should now just test our app to make sure things are still working. Uh so
8:34:50
let's go ahead and do the following. Let's go inside of our projects list now. And I just want to do a slight
8:34:57
modification here. And that modification is that I'm going to load the current
8:35:05
user from use user which you can import from clerk next.js. And then this will
8:35:11
allow us to do the following. We can then do user question mark first name
8:35:17
and then apostrophes users Mines and then in here also do if
8:35:24
there is no user return null. So we don't even load the project list if we
8:35:30
are not logged in. We can of course do this in a million ways but I think this is just simple enough for now. Uh great.
8:35:38
So you can see that when I am logged out nothing happens here. Great. So what I
8:35:44
want to do first is I want to go inside of my project form and in here
8:35:51
in my on success specifically on error I
8:35:56
should redirect the user to the out screen as well if this fails because right now when I type test I'm just
8:36:04
getting an error not authenticated. I mean, you could technically argue that's good enough, but uh let me show you what
8:36:11
you can do. So, you can do router and then you can just push the user to sign
8:36:16
up or sign in. That's an easy way you can do. But here's a cool thing. You can actually do con clerk use clerk from
8:36:22
clerk.js. So, just make sure to add this import.
8:36:28
And once you have it, you can do the following. If error
8:36:35
data.code is equal to unauthorized, you can do clerk.open
8:36:42
sign in like that. Uh, and let me just so error data is possibly undefined. So
8:36:48
maybe I need to do this. There we go. And let me just move this to the top. So
8:36:56
this way if this fails, it will open the signin model. So I write test.
8:37:01
And there we go. It opens this nice model. I think it looks cool. If you want to, you can also just do, you know,
8:37:08
router.push sign in. That also works.
8:37:14
There we go. So, whichever one you prefer. I just thought I would show you this cool alternative.
8:37:20
Uh, great. So, I'm pretty sure that we
8:37:26
don't have to do anything more besides test the app. So now I'm going to log in here.
8:37:32
And as you can see, it says Jones Mines and no projects found. And I will do
8:37:37
build a landing page here. And let's see, will I get any errors? I
8:37:43
don't think I'm getting any errors at all. I do want to just check my functions.ts just to confirm I'm not
8:37:49
getting any errors in here. Even though we shouldn't be getting any errors at all. This is a background job. This
8:37:55
doesn't need any user ID. I think everything is just fine here and I think that we will be able to normally
8:38:02
load the messages. But let's wait and see the result. And there we go. Once I am logged in,
8:38:09
you can see that I can normally create my messages. I can even refresh this and I can load my messages. I can see my
8:38:16
fragments. So all of this is obviously working. Perfect. Uh and let's try
8:38:22
something fun. I'm going to copy the URL here and I will log out. And then I'm
8:38:28
going to go ahead and paste that URL. So obviously I'm getting redirected. But let's say inside of my middleware I
8:38:34
accidentally do projects and I do this. All right. So let's see
8:38:39
what happens then. You can see that even if the middleware fails,
8:38:45
nothing useful is shown to the user and finally an error is thrown. This is of
8:38:52
course not ideal because we are missing an error boundary. uh we're going to fix this details in the last chapters,
8:38:59
right? Obviously, it's not ideal that this types of errors shown even though this wouldn't show in production. This
8:39:04
is what you would see in production, which is not any better, but we will I'm going to show you how to add proper
8:39:10
error boundaries. I just wanted to show you that you can't fool this system we just created, right? You will either get
8:39:16
redirected or you will be hit with a bunch of errors because you don't belong on that website. Amazing. Amazing job. I
8:39:25
think that officially marks the end of this chapter. So now let's go ahead and let's open a pull request. So 16
8:39:32
authentication. I'm going to create a new branch. 16 authentication.
8:39:40
I'm going to stage all of my changes. 16 authentication. I'm going to commit and
8:39:46
I'm going to publish the branch. Now, let's go ahead and open a pull request and let's review our changes.
8:39:58
And here we have the summary. We added user authentication and theming support using clerk, including sign in and sign
8:40:05
up pages with theme aare styling. We introduced a navigation bar with authentication controls and user
8:40:12
display. We added a user control component for displaying user information and actions. We integrated
8:40:18
authentication checks into project and message features, ensuring users can only access their own data. We improved
8:40:27
project and message lists to only display personalized content and enforce userbased access. Exactly what we did in
8:40:35
this chapter. As always, file by file walk through here and a whole sequence
8:40:41
diagram explaining how our new clerk provider and authentication TRPC procedures work. And we did a very good
8:40:49
job this time. The only comment is in the migration SQL. Um, we don't really care about this because we are in
8:40:56
development phase and no other comments. Amazing, amazing job. Let's go ahead and
8:41:01
merge this pull request. And once we've done that, let's go ahead and go back to the main branch and let's click on
8:41:07
synchronize changes and okay. And in a few seconds, you will see that 16 was
8:41:13
just merged authentication. That marks the end of this chapter.
8:41:19
Amazing, amazing job and see you in the next one. In this chapter, we're going to
17 Billing
8:41:25
implement billing and the credit system into our project. In order to do that,
8:41:31
we first have to enable billing in clerk. We then have to create a pricing page. After we've done those two, we can
8:41:39
start and add rate limiting or usage or credit system in our application. This
8:41:46
will include adding some new models to Prisma schema and creating the util for
8:41:51
rate limiting. After that, we're going to have to create the usage component which will show to the user how many
8:41:57
credits they have. And finally, we're going to have to update some procedures to actually call this util for rate
8:42:04
limiting to trigger credit spend. So, let's start with enabling billing. So,
8:42:10
this is the first time I'm using clerk billing. It was announced recently and
8:42:16
the moment I heard it, I just knew it had to be an incredible developer
8:42:21
experience. And I think that you will be shocked at how good it is because we all
8:42:27
know that Clerk's developer experience is immaculate. They have completely solved the issue of uh complicated code.
8:42:34
Everything regarding Clerk is super easy, super fast and super simple to do.
8:42:40
And billing is one of the most complicated parts of building the authentication, especially if we are
8:42:46
doing it with Stripe. So, you're going to be so impressed by the fact that we
8:42:52
won't even need a web hook for this entire process. More so, we won't even
8:42:58
have to build a single component besides our custom usage component, which actually has nothing to do with billing.
8:43:07
Let's go ahead and do that. You can find information about clerk billing in their documentation here. You can scroll and
8:43:14
find billing. And in here, you can select B2C. You can also do B2B but in
8:43:19
this case it will be uh B2C SAS. The first thing we have to do is enable
8:43:24
billing. So we have to go to billing settings. This will redirect you to your
8:43:30
project. So you click into configure and down here billing settings.
8:43:35
Go ahead and click create a plan. And the first thing we're going to do is we're going to create a free plan. So
8:43:42
I'm going to go ahead and open this. And in here you can set the name of the plan and you can set the slug like this. So
8:43:50
this is what we are going to use in our codebase to check if the user is on that plan. Right? So we're going to check if
8:43:57
free user is active. That means the user is currently on the free tier. Uh and in
8:44:03
here make sure to check publicly available. This basically means that this will appear on the pricing table.
8:44:11
So you can create that and then you can click add another user plan and for
8:44:16
example call this pro like this and give it a monthly fee of $29. And if you're
8:44:24
wondering can I easily combine this into an annual discount? Yes, you can just enable annual discount and in here set
8:44:31
it to something like 25. So, if they pay monthly, it's going to be $29 a month.
8:44:39
But if they choose to pay annually, we're going to reduce the price to $25
8:44:45
per month. So, you're going to get $300 instantly from them. And in return,
8:44:51
they're going to have a bit of a cheaper plan. You can, of course, uh assign the price to whatever you want and click
8:44:58
save. So, right now in your subscription plans, whoops. right here you should have two
8:45:05
subscription plans, one free and one pro which is build monthly or annually. So
8:45:11
in here, let me just go and click on the settings here. And in here, let's just click enable billing. There we go. So
8:45:18
now billing is enabled. And in here, you can choose your payment getaway. So if you want to, you can add your own Stripe
8:45:25
account, but you can also choose clerk's payment getaway, which is a zero conflict payment getaway. it is ready to
8:45:32
process and test payments immediately. And this is amazing. You're going to see how simple this is. So, to recap, go
8:45:40
inside of configure, go inside of billing settings, and make sure that you click enable. Make sure that you have a
8:45:46
message billing is enabled. After that, go ahead and create two subscription plans right here. And now, let's go
8:45:53
ahead and let's add a pricing table to our app. So, as always, make sure that you are on
8:46:01
your main branch. Make sure that you synchronize your changes. And if you want to go inside of
8:46:08
source control and confirm that the last change was adding authentication.
8:46:13
What we have to do now is we have to implement the pricing page. So, let's go inside of source app home and let's
8:46:20
create a new folder called pricing inside page.tsx. tsx
8:46:28
like this. Let's mark this as use client. And then let's go ahead and
8:46:34
let's import image from next image. And let's import
8:46:40
pricing table from clerk next.js. And let's go ahead and export this page.
8:46:47
So I'm going to export it like this. And inside of here for now, let's just do
8:46:52
pricing table. Let's just do that and nothing more. If you now go into your
8:46:58
app, just make sure you have it running. And if you go to forward slashpricing,
8:47:06
uh it will redirect you to the login page. So, let's just make sure to add that here. So, forward slpricing
8:47:15
like so. Now, you should be able to go to localhost 3000 pricing.
8:47:22
There we go. we have a date a pricing table. So we didn't have to code a
8:47:28
single component. All we have to do is style it a little bit now. So let's go ahead and do that. So I'm going to go
8:47:34
back inside of here and I'm going to add a class name flex
8:47:40
flex column maximum width of 3 Excel MX auto and full width. I will then add a
8:47:48
section around our pricing table and I'm going to create a div inside of here
8:47:54
with an image component and then in here I will add an H1
8:47:59
element and then I'm going to add a paragraph. Now let's go ahead and style this. Starting with the section which
8:48:05
will have space Y 6 padding top of 16 VH
8:48:14
on to Excel padding top of 48.
8:48:20
Then on this div encapsulating the image let's give it a class name of flex flex
8:48:26
column and items center. For the image itself, give it a source logo SVG, alt
8:48:36
Mine, width 50, and height 50 as well.
8:48:42
And give it a class name hidden MD block. Then in the H1, go ahead and add the
8:48:49
text pricing. And give this a class name of text extra large like this.
8:48:57
on MD text 3 Excel font bold and text
8:49:02
center for the paragraph. Enter the text. Choose the plan that fits your
8:49:09
needs. And give this a class name text muted
8:49:14
foreground text center text small and MD text base.
8:49:22
And now let's just go to the pricing table appearance.
8:49:28
And let's add elements here. Pricing table card. And let's change this to use
8:49:34
the border shadow none rounded large. Just just make sure
8:49:41
you're putting the exclamation points here. And just like that, we have a pricing table that clearly reflects the
8:49:48
two plans that we created in clerk dashboard. So now let's go ahead and
8:49:53
let's modify the descriptions of these and let's show some features which will be active once we upgrade.
8:50:02
So let's go inside of our clerk dashboard here. Go inside of configure
8:50:07
and in here subscription plans. Select the free one and let's go ahead and give
8:50:13
it a description for getting started like this and click save.
8:50:19
And then in here, let's add a feature. And let's go ahead and call this feature
8:50:25
five monthly credits. Like that. Make sure it's publicly
8:50:30
available. And let's click create feature. And let's click save. And just by doing that and refreshing, you will
8:50:37
immediately see the new description reflected here. And you will also see the new feature five monthly credits.
8:50:46
And now if you wanted to this is where you will add even more features for example public projects something like
8:50:53
that. So for example we don't even have private or public projects all projects are private in our case but for example
8:51:01
here you can see how that would look like. And now let's go ahead and let's modify the other plan which is the pro
8:51:09
plan. So go back here back inside of our subscription plans
8:51:15
and select the pro plan. So this one can have the description of for more
8:51:22
projects and usage and then go inside of the features here
8:51:30
and let's go ahead and add a new feature called 100 credits
8:51:35
per month like this. Let's go ahead and let's add private
8:51:42
projects like that. Let's add custom domains.
8:51:48
Basically, whatever you plan to, you know, extend this application with, you can add here or maybe some collaboration
8:51:54
like three editors per project. All right, just think of a bunch of features
8:52:00
you would add to your app. And let's do uh remove the Mine badge. Imagine that
8:52:07
we would create some kind of feature that adds the Mine badge. And click save. And you can of course, you know,
8:52:13
drag and drop this however you like. I just wanted us to add a lot of features here simply because the the pricing
8:52:20
table looks better if you add more features here. And I absolutely love how
8:52:26
this looks. So now that we have uh this finished, let me just go ahead and do
8:52:32
one thing. I want to go inside of layout right here and I want
8:52:39
to modify the clerk provider and its appearance here. And I want to add variables here. Color primary. And I'm
8:52:47
just going to set it to the light mode of our cloud theme, which is this.
8:52:54
And when you save this, you can see that immediately it will pick up the theme that we are using throughout the
8:53:00
project. And I just think this looks amazing. Now, let's just go back to the
8:53:05
pricing here. And let's enable dark mode if we need it. So, I'm going to import
8:53:15
dark from Clark themes. And I'm going to import use current theme. Make sure this is
8:53:21
marked as use client. Go ahead and add this. And then simply in the appearance,
8:53:29
go ahead and add base theme. checking if the current theme is dark, then use dark, otherwise it's undefined. And now
8:53:36
this page will support dark mode as well. Uh, and if you try and subscribe, you can see that you're redirected to
8:53:42
login. So you don't have to immediately uh try and subscribe simply because I want to demonstrate the entire upgrade
8:53:49
process. You can see that when I log in, by default, every user is in the free tier. You didn't even have to write the
8:53:56
code for that. you automatically, we automatically added this user to the free tier. If you click subscribe here,
8:54:02
you can see how nicely this looks. As I said, you don't have to do this now. If you can, fine. Sure. But you're going to
8:54:09
have to create a new account to test out our usage uh tryyouts. So, you can see
8:54:15
how this looks. I think it's just, you know, amazing. Uh, and one thing that I
8:54:20
want to fix that we forgot about is when I scroll, I want this navbar to stop
8:54:27
being transparent because it just looks weird. So, let's quickly fix that by
8:54:33
going inside of source hooks and let's create use scroll.ts
8:54:40
like this. And inside of here, let's go ahead and do import use state use effect from
8:54:48
React export const use scroll. And let's add the threshold
8:54:57
to be 10. Define the state is scrolled and set is
8:55:02
scrolled. Use state by default is going to be false. Call use effect
8:55:10
with for now an empty dependency array
8:55:15
like this. And inside create a handle scroll arrow function
8:55:23
which will call set is scrolled to be window scroll Y which is above the
8:55:31
threshold. And then let's add a window add event
8:55:36
listener here to listen for scroll and handle scroll.
8:55:44
And then simply call handle scroll. And in the return method call window remove
8:55:49
event listener scroll handle scroll just
8:55:54
like that. And add the threshold inside. And all you have to do is return is
8:56:01
scrolled. There we go. So now that we have use scroll in our app, we can go back to the
8:56:09
navbar inside of home module UI components navbar. And in here you can
8:56:15
now easily get is scrolled. Use is scrolled.
8:56:21
Use scroll. My apologies from hooks. Use scroll. and then make this a dynamic
8:56:28
class name by wrapping it inside of curly brackets and adding the CN util.
8:56:34
So we have to import CN from lib utils.
8:56:39
I'm going to keep the static classes as the first argument and then I'm going to check if is scrolled. Let's do back bg
8:56:47
background and border border. So now if you scroll ever so slightly,
8:56:54
you can see that the navbar starts to stop being transparent and a
8:57:01
border appears. Amazing. Now that we have this and now that we have the
8:57:07
billing, let's go ahead and just check a couple of things. So now this upgrade button should take you to the pricing.
8:57:13
If yours doesn't, make sure you check the project view here. And make sure
8:57:19
that you have a button. Let me just find it. Here it is. Button with a link
8:57:25
redirecting to pricing like that. And now it's time to create the usage model.
8:57:33
So in order to do that, we're going to have to install a package called rate
8:57:42
liimiter flexible. So let me just close this and this and let me do npm install
8:57:49
rate limiter flexible like this. Let me show you the version.
8:57:57
So I'm using 7.1.1. That's my version. Let me do npm rundev. And then in here,
8:58:06
I'm going to go ahead and do the following. Inside of Prisma schema,
8:58:11
I'm going to create uh a new model called usage. Right here at the bottom,
8:58:18
model usage. Let's go ahead and give it a key, which
8:58:25
will be a type of string, and that's going to be the ID. and then a points
8:58:31
which will be integer and finally expire which will be an optional
8:58:38
date time. So this will be my usage model. Now let's go ahead and let's do
8:58:44
npx prisma migrate dev. We don't need to clear our database because this is not
8:58:51
really conflicting with any other models. We're just adding a new one. So, I'm going to call this migration usage.
8:59:00
Let's go ahead and add the name usage. And there we go.
8:59:06
Now that we have the new usage model here and the new migration ready, let's
8:59:12
go ahead and let's implement uh the usage tracker. So, this is what I'm
8:59:18
going to do. I'm going to go ahead and create a new lib that I'm going to call
8:59:24
usage.ts. ts. And inside of here, I'm going to go ahead and add an import for
8:59:31
the rate limiter. So, specifically, it's going to be rate limiter Prisma right
8:59:36
here. And let's go ahead and do export async function get usage tracker
8:59:45
like this. And for now I'm just going to define const usage tracker to be new
8:59:52
rate limiter Prisma store client will be our Prisma from the
8:59:58
database like this
9:00:04
and table name will be usage. So just make sure it matches exactly the model
9:00:09
we named here. And for the points, let's go ahead and by default, uh, give everyone five
9:00:18
points. And for the duration, let's go ahead and
9:00:23
let's do 30 days. So, 30 * 24 * 60 * 60.
9:00:29
Now, what I like to do is I like to do const free points. And let's go ahead
9:00:35
and give everyone free points. So, you can replace this like so. Then let's do the cons duration to be 30 * 24 * 60 *
9:00:44
60. So you can add a little comment 30 days for example.
9:00:52
And now that we have this, let's just return the usage tracker.
9:01:01
And now let's go ahead and let's create a function called consume credits. So export async function consume credits
9:01:10
and in here let's go ahead first uh and let's extract user ID to be await out
9:01:19
from clerk next.js server
9:01:25
like so and make sure to execute this. If there is no user ID, we can throw new
9:01:33
error here. User not authenticated. That's the first thing. And then let's
9:01:40
go ahead and do const usage tracker to be await usage tracker. Basically this
9:01:46
function which we defined above. And then in here const result to be await
9:01:53
usage tracker dot consume. pass in the user ID and then how many
9:02:00
points do we want to take from them. So for that I'm going to define const generation cost cost to be one. So let's
9:02:09
go ahead and add that here. So we're going to subtract one point from the user every time we consume credits. And
9:02:17
then let's just return result. And then let's create the last function.
9:02:24
Export asynchronous function get usage
9:02:30
status. Again extract user ID from await out.
9:02:37
If there is no user ID throw new error user not authenticated.
9:02:46
And then let's do const usage tracker here to be await get usage tracker
9:02:55
and then result will be await usage tracker
9:03:01
dot get user id. So we are looking at how many points we have left.
9:03:07
There we go. So we are basically using this very very cool library which can inject directly into Prisma. Uh, and I'm
9:03:14
just going to open the documentation now for it so you can read more. So here it is. Node rate limiter
9:03:22
flexible. Basically node limiter flexible counts and limits the number of actions by key
9:03:28
and protects from DDOS and brute force attacks at any scale. It works with W key radius, prisma, dynamo, process
9:03:35
memory, cluster, pm2, memach, myql, sqlite and posgress. Also works in
9:03:41
the browser. It offers atomic increments. All operations are in memory or distributed environment. Use atomic
9:03:48
increments against race conditions. So if that's something you were wondering about, yes, we solved the problem of
9:03:54
race conditions by using this package. It is extremely fast. It is flexible,
9:03:59
ready for growth and it is friendly. Now, should it be used exactly the way I'm using it? Right? I'm using it as a
9:04:07
simple rate limiting for premium credits. I haven't really seen any
9:04:12
advice not to do it. But since it solves uh a bunch of problems out of the box
9:04:18
and it's just an npm package, I thought it was a no-brainer to use it. Uh given the fact that we can easily add it to
9:04:25
Prisma, right? So that's why I chose this package. Uh I explored a bit what we should use. Should we develop our own
9:04:31
and this ended up being the best decision. Great. So now that we have
9:04:36
these three functions, a functions to get the usage status by the current user ID key, a function to consume credits
9:04:44
for the current user, and the overall function to get the usage tracker, which
9:04:50
right now doesn't make too much sense. This could have been a constant, but don't worry, it will make sense later.
9:04:57
So now let's go ahead and let's actually create the procedure for the rate
9:05:03
limiting here. So I'm going to go ahead and go inside of source. I will create a new module
9:05:10
called usage and in here I'm going to create server and then I'm going to
9:05:16
create procedures.ts. Let's go ahead and do get usage status
9:05:22
from lib usage. Let's import create trpc router from trpc init and protected
9:05:29
procedure. Then let's go ahead and export constage
9:05:35
router to be create trpc router status is going to be protected procedure query
9:05:44
asynchronous method and then in here let's open a try and
9:05:50
catch block return null in the catch block and in the try attempt to get the
9:05:55
result from await get usage status and return the
9:06:03
As simple as that. So we we don't really worry about catching these errors and displaying something since this is a
9:06:09
query, right? So once you've done this, go ahead and add that to your TRPC
9:06:16
routers here. So usage usage router. There we go.
9:06:23
And yes, if you want to, you can move everything usage related into this module. Perhaps you can move it out of
9:06:29
the usage. Um, for now I will leave it here. But yeah,
9:06:34
if you want to you can create a lib here. I think it will make more sense actually. Uh, okay. Now that we have
9:06:41
this, let's go ahead and let's create the usage component. So this one will be
9:06:46
interesting. Let's go inside of source modules projects UI components and let's
9:06:54
create usage.tsx. So in here I want to create an interface
9:06:59
props which accepts the points and milliseconds before next refresh.
9:07:04
And for the imports let's go ahead and let's import link from next link. Let's
9:07:11
go ahead and let's import the crown icon from lucid react and let's import format
9:07:18
duration and interval to duration from date fns. And finally the button from
9:07:24
components UI button. Now in here, let's go ahead and let's add the usage like
9:07:30
so. Let's return a div with a class name
9:07:35
rounded top extra large bg background border border bottom zero adding 2.5.
9:07:46
another div inside with a class name flex items center and gap x of two
9:07:56
in here a div which will have one more div inside and this inner deal div div
9:08:02
will have a class name of text small and let's go ahead and simply render the
9:08:08
number of points that we have and then let's just say you have that many free credits remaining and you can change
9:08:16
this into a paragraph so we don't use so many divs. And then after that add
9:08:22
another paragraph with a class name of text extra small
9:08:27
and text muted foreground and inside resets
9:08:34
in then add a space like this open curly brackets format duration
9:08:43
inside of it interval to duration
9:08:48
and set the start to be new date and set the end to be new date and inside date
9:08:56
dot now plus milliseconds before next
9:09:02
and then add a new prop here I mean a new param in this interval to duration
9:09:09
uh my apologies format duration function which takes the format to be months days
9:09:17
and hours so it's going to display in those intervals. And I think that's it. I think that's
9:09:24
all we need. And then outside of this div right here,
9:09:33
go ahead and add a button and a link inside. The link will have an href to
9:09:40
the pricing page. We're going to render a crown icon and text upgrade. The
9:09:46
button will have an as child size small variant will be the new one that we
9:09:53
created tertiary I I guess class name ML auto
9:09:59
now that we have this let's go ahead and display the usage prop
9:10:06
in order to display it we have to go inside of our messages form
9:10:13
component so it is inside of projects UI components message form and then let's
9:10:20
go ahead above this and let's do show usage and end and then render the usage
9:10:27
like so. Import the usage from dot / usage passing the points to be zero and
9:10:33
milliseconds before next to be zero. Just make sure you have imported the
9:10:38
usage component. So now go into any random project that
9:10:45
you have. So I'm going to go ahead and go inside of this one that I already have. And once this loads, nothing
9:10:52
changes. But if I go inside of the message form and if I change the show usage to true.
9:11:01
And if I refresh, you will see zero free credits remaining, resets in nothing,
9:11:07
and we have a button to upgrade. That's what I wanted to see. And now what we're
9:11:12
going to do is we're actually going to fetch the usage from our new router. So let's go ahead to the top here and
9:11:21
before the form, let's do const data usage to be use query which you can
9:11:29
import from let me just find tanstack react query.
9:11:34
Here it is. And in here pass TRPC usage status like
9:11:42
this query options. And once you have the usage, let's go
9:11:48
ahead and define the show usage to be double exclamation point and then usage.
9:11:55
And then in here you're going to do if you pass the points to be usage remaining points and in here usage
9:12:03
milliseconds before next. And now let's refresh.
9:12:09
And it looks like it does not exist yet. I think that is because yes, so it's not
9:12:16
going to exist right now because in order for this to be written to the database, let me just start npx Prisma
9:12:24
studio so you can see what I'm talking about. We have this new model called usage. Right now we have the fields key
9:12:33
points and expire but nothing exists here. It will not be created by itself.
9:12:38
It will be created after the very first consume credits function
9:12:44
is called. So the first time we do dot consume and take some points that's when
9:12:49
it's going to be stored in the database. So let's go ahead and let's do that. So
9:12:55
the first one we can do it for is the messages procedures. So let's go inside of messages server procedures and in the
9:13:03
create here let's go ahead and do that. So before we even create the message
9:13:10
here let's go ahead and let's do await and
9:13:16
let's call consume credits like so. And now this will already work.
9:13:24
But I want to do I want to just wrap this into try and catch because get
9:13:30
usage uh usage.conume will have an error object right because
9:13:37
there is an error that we have to catch and that is the error which says you have no more points. So we have to catch
9:13:44
that here. So let's do it by wrapping this inside of try
9:13:51
like so and then open catch and let's get the error. And the first thing we're
9:13:56
going to do is we're going to check if error is actually an instance of error.
9:14:01
This is this basically means that something else happened. Right? This
9:14:06
doesn't mean that we hit a rate limit. This just means something literally
9:14:12
failed. Maybe it's the database connection, right? Because this works by connecting to the database. So maybe that failed. So it would be incorrect to
9:14:19
just throw a TRPC error saying rate limit exceeded if consume credits fail. That's why in here I will throw
9:14:28
new ERPC error here with the code
9:14:33
bad request and a message something went wrong. Right? So I have no idea what
9:14:41
happened here but it's not something we expect otherwise it is so if it is not an
9:14:48
instance of error that means this is the rate limit response. So in here add a
9:14:55
code too many requests and add a message um let's see you have no more or maybe
9:15:03
you have run out of credits something like that basically a message
9:15:09
indicating to the user that they have no more points and now just for fun I'm
9:15:14
going to modify my usage here and I'm going to set uh two free points
9:15:20
so let's go ahead and try it out now I'm going to do build a landing page.
9:15:26
Something that reliably works for me. And we should have done uh one thing here immediately. Oh yes, we forgot the
9:15:33
ingest API. We forgot to do that. npx inest cli. Whoops. My bad. And let me
9:15:42
just refresh this. And you can see that now when you refresh you you have one free credit remaining which resets in 29
9:15:49
days and 23 hours. Do I have my Prisma Studio running? I do. So if I go here
9:15:55
now in the usage and reset once we call this consume method, you can see that I have a key which is the user ID with
9:16:04
some prefix here. And I can see when this will expire and I can also see how many points I have spent so far. So I
9:16:11
only spent one point so far. And basically that is how this is going to
9:16:16
work. So just for fun I will do build a landing page again. And this time uh I
9:16:22
will refresh and I will have no free credits remaining. So if I try one more time I should get the error you have run
9:16:29
out of credits and we just got that error. Amazing. You successfully implemented usage. Now you probably
9:16:36
noticed a little bit of a weird thing here. Uh and that is that uh we call
9:16:42
consume credits before we even know that this succeeded.
9:16:50
So if you want to, you could move this consume credits function into the
9:16:56
background job and then only consume the credit after you successfully save the
9:17:01
result to the database. It will depend on what you want to protect, right? If you want to protect your resources, you
9:17:09
will most likely add this before you even call uh something like inest. and
9:17:15
you don't even want to spend any open AI credits if someone doesn't have enough credits, right? But if you were to pass
9:17:22
this in the background job, you would also need to pass the user ID in the event data. So just be mindful of that.
9:17:29
And then you would also have to modify the consume credits overall because in here we rely on it using ALF and I'm not
9:17:36
sure how this will work if it is invoked from a background job. I just think that it will throw user not authenticated
9:17:43
because background jobs by default are not authenticated. They are like web hooks. Right? So that's why I decided to
9:17:51
do it in the procedure rather than in the background job. What we have to do
9:17:56
is this to-do right here. So let's remove this. Let's add queryclient dot invalidate queriesc
9:18:04
usage status query options like this. So now when we create a new message, we
9:18:11
automatically invalidate the queries. And one easy way to reset this is to
9:18:16
just go inside of your Prisma Studio and just bring back the points for your user
9:18:22
to be zero and click save. And this way you will not have spent any points. So
9:18:27
you are now back at three credits remaining. So if I go ahead and do test and send the message now, it should
9:18:34
automatically upgrade. And there we go. You can see now it says one. So that is thanks to this invalidation here. And
9:18:41
now we can also fix this to-do here as well. So if error.code error data question mark code is equal
9:18:48
to too many requests, let's go ahead and do router. We don't have router. So
9:18:55
let's add it. Con router. Use router from next navigation. Make
9:19:01
sure you add this import. And just do router.push. push forward
9:19:09
slash pricricing like that. So now when you hit too many requests it will yeah
9:19:15
you can see this is kind of the not perfect thing. If you spend your credit
9:19:20
on a bad query we take the credit away from you and you don't get the result.
9:19:26
So yeah not exactly perfect but I think it's pretty good so far. Right. Let's go
9:19:31
ahead and just I purposely just going to use stupid queries now just to get that error. There we go. So once I run out of
9:19:39
credits, I'm redirected to the pricing page. Perfect. Now there is one more place where we need to do this exact
9:19:45
thing. So I'm going to go inside of messages procedures just so I can copy
9:19:50
the try and catch for my consume credits here. And now let's go ahead and go
9:19:56
inside of projects server procedures.
9:20:02
procedures right here and find the create right here and simply call that
9:20:10
try catch before you create a new project and import consume credits
9:20:20
like this and then go inside of project form component and we have to do the
9:20:26
same thing. So first things first query client invalidate queries and pass in gRPC
9:20:33
usage status query options
9:20:39
and then in here if error data code is too many requests
9:20:46
do router.push/pricing. There we go. So now you have the exact
9:20:52
same thing happening from here. So if you try test from here same thing happens. you have run out of credits and
9:20:58
you are redirected here. Amazing. But right now, if we were to upgrade,
9:21:04
nothing would change. So, let's go ahead and fix that. So, in order to fix that,
9:21:10
we have to go inside of our usage in the lib here. And then what we have to do uh
9:21:17
is we have to get inside of here the status. So has and let's do await out
9:21:27
hon has premium access will be has plan
9:21:34
and then pro. So how do I know it's pro? Well because inside of the clerk
9:21:39
configuration here the slug is pro. So maybe has row axis would be better. And
9:21:47
then what I'm going to do is I'm just going to add const pro points 100 like
9:21:53
this. And then if I have has proaxis, it's going to be row points. Otherwise,
9:22:00
it's going to be three points like that. And here's a
9:22:06
quick tip. If you also want to change the duration uh which I wouldn't
9:22:12
recommend you know there there's also if you look at all of these apps chat GPT
9:22:17
uh claude lovable bolt replet I've noticed that not all of them have annual
9:22:22
plans and the reason for that is it is safer for them to bill you monthly uh
9:22:29
simply because they don't know how many credits you can spend right so that's why I recommend not changing the
9:22:35
duration for the proaxis. But even if you wanted to, the way this rate limiter
9:22:40
works is that it will not update the duration, right? So you can update the
9:22:45
points in the middle of an existing uh database record for rate limit, but you
9:22:51
cannot do it for expiration just if you in case you were interested. But in this case, it doesn't really matter because
9:22:57
it is safer for us business-wise to track monthly usage and do monthly
9:23:03
billing, right? Even if a user is on an annual plan, we're just going to give them the same amount of points, 100
9:23:09
points per month. Great. Now that we have this done, uh
9:23:15
let me just check. I think this is the only place here uh where I have to do
9:23:20
that. And now let's just do a comparison. So when I click on one of my projects, it says
9:23:26
zero free credits remaining. I will click upgrade. I will click subscribe. Pay with the card.
9:23:33
That's it. That was clerk billing. I don't know if you just saw that, but that was it. I can now go inside of my
9:23:39
manage account billing and I can find that I am on this plan. And from here, I
9:23:45
can see cancel subscription. I can switch. I can remove monthly, whatever I
9:23:51
want. So, I think this is insanely good. And let's see if it worked. So, right
9:23:57
now, uh I think that there we go. I have to refresh, right? And then it says 96
9:24:03
free credits remaining. So we are have officially upgraded, right? I can now
9:24:08
send another broken message. And it works. So we successfully added 100
9:24:14
points. It seems like it has subtracted the existing points we spent during the free trial. So that's something we could
9:24:21
improve, but overall it works. When the user is pro, we use a larger amount of
9:24:28
points here. So now what we have to do is we have to
9:24:34
change the text. This is no longer free credits. This is just credits now. And we can also remove all of the upgrade
9:24:40
buttons. We no longer need them. So let's do that. I'm going to go inside of the usage.tsx
9:24:48
here and let's see. So this is from out which means that in here we can access
9:24:53
has from use out from clerk next.js. JS
9:24:59
I have has here so I'm going to change let's go ahead and do const is has pro
9:25:06
access has plan pro
9:25:13
has question mark plan pro so let's check if has pro access then it's an
9:25:20
empty string otherwise it is free so now it should just say 95 credits remaining.
9:25:27
No free credits. And let's hide this button if I don't have Pro Access.
9:25:37
So, only show this for users who don't have Pro Access. There we go. And let's
9:25:43
do the same thing in the project view. So, I'm just going to
9:25:48
copy this. Go inside of the project view. I'm going to add it here.
9:25:54
I'm going to import use out from clerk nextjs.
9:26:00
I'm going to move it here. And then if I don't have pro access, I'm
9:26:06
going to show this button right here. So if I don't have pro access only, then
9:26:15
show the button. And there we go. Now the button doesn't exist. If you want to use the reverse
9:26:22
logic, if you want to create const is free tier, then you would do has plan.
9:26:30
And be careful here. It's not free, right? You always have to go inside of
9:26:36
here, inside of your plans, select the plan you want, and then check the slug.
9:26:42
It's free user. This is the one you want. That's the mistake I made when I
9:26:48
developed. So, I'm just warning you. But in here, we used this type of logic, so it's fine. And I think that that might
9:26:56
be it regarding billing. It was that simple to do. I'm super impressed by
9:27:02
this. No web hooks, nothing. I mean, 90% of this chapter wasn't even adding billing. It was adding usage rate
9:27:09
limiting, right? So amazing, amazing job. I am super satisfied by this. So
9:27:16
let's go ahead and merge all of this. I believe this chapter is called 17 billing and let's just mark things. So
9:27:22
we enabled billing, created pricing page, added rate limiting, updated the Prisma schema, created the util, we
9:27:29
created the usage component and we updated procedures to trigger credit spend. Yeah, one more thing I wanted to
9:27:35
show you. If you want to, you can also implement something like usage procedure
9:27:40
and then in the middleware you could check for the uh consume status. Maybe
9:27:46
that would be something fun for you to try and then you would have a more abstracted routers and procedures to
9:27:53
work with. Maybe homework for you if you want to after you finish the project.
9:27:59
Okay. So, I'm going to go ahead and I will create a new branch here.
9:28:06
17 billing like this. I'm going to stage
9:28:11
all of my changes. I'm going to add 17 billing commit here and I'm going to
9:28:16
publish the branch. Just a quick reminder, there's a code rabbit free extension which you can use and it will
9:28:23
review all of your files for you. Now, let's go ahead and let's open a
9:28:29
pull request here and let's see the summary of our billing changes.
9:28:36
And here we have the summary. We introduced a usage and credit tracking system for users with separate limits
9:28:42
for free and pro plans. We added a new pricing page with dynamic theming and a
9:28:48
detailed pricing table. We added a usage component to display remaining credits and reset time with an upgrade prompt
9:28:55
for nonpro users. Navbar now dynamically changes style based on the scroll
9:29:00
position. As per the enhancements, project and message creation now deducts
9:29:06
credits and prevents actions if credits are exhausted, redirecting users to the pricing page when necessary. Usage
9:29:13
status is now displayed and updated in relevant forms and components. The upgrade button is only shown to users
9:29:20
without a pro plan. Perfect. So, that's exactly what we did. As always, an more
9:29:25
in-depth walkthrough here. And we have a sequence diagram uh explaining exactly
9:29:31
what happens. Right? So when user tries to submit a and create a new project or
9:29:36
a message, we call the mutation. In here we call the consume credits and in here
9:29:41
we call the database to check and update the usage. And then if we have credits
9:29:47
available, we return with succeed with success and we proceed with the creation. And then we simply return the
9:29:53
creation results. But if credits are exhausted, we throw too many requests and we redirect the user to pricing.
9:30:01
Amazing. Exactly what we developed. And in here we also have the diagram for our
9:30:07
get usage status method which simply reads the usage and it returns it.
9:30:12
Perfect. So in here we have some actionable comments. This one recommends adding a default false in case has
9:30:20
doesn't load, which is actually a good advice. We could do that in here. It recommends wrapping this
9:30:28
instead of try and catch and fall backs to soon.
9:30:34
So, this can happen if the dates are incorrect. And yeah, this this might be a good idea because it's kind of u weird
9:30:42
that the entire page fails just because the date renders incorrectly. So we
9:30:49
could actually do this in the next chapter. Uh so we ensure some kind of security here so it doesn't ruin the
9:30:56
entire experience. And then in the usage.ts for all of the function, it
9:31:01
recommends adding error tracking. But we don't have to do that simply because we track in the TRPC.
9:31:07
So I'm going to merge this pull request. I'm going to keep in mind the changes it suggested. And then I'm going to change
9:31:13
back to my main branch here. And I'm going to click on the synchronize changes button. And okay. And then I
9:31:20
will confirm that we just merged that right here. 17 billing. Perfect.
9:31:26
Amazing. Amazing job. We have finished billing. and see you in the next
9:31:32
chapter. In this chapter, we're going to implement agent memory. Right now, our
18 Agent Memory
9:31:39
agent and our conversations have no context. The agent doesn't know the
9:31:45
history of our conversations. It doesn't understand our previous messages. Each
9:31:51
message is technically a new project. Let's test that out. As always, ensure
9:31:58
that you are on your main branch and feel free to synchronize the changes. The last chapter was 17 billing. Make
9:32:06
sure you have npm rundev and injust running. And what I want you to do is I want you to create a very simple build a
9:32:13
landing page. The one we already did hundreds of times. So go ahead and build
9:32:20
a simple landing page. And here we have a very simple landing
9:32:26
page. What if I just send it a message make it red?
9:32:31
What we would expect to happen is that it would understand that my previous message was build a landing page and it
9:32:39
will now change it to red. But the truth is that won't happen. Right? So it
9:32:46
didn't modify the landing page. It's simply updated the page to be a red
9:32:52
themed page. If I add add a calculator there, it won't understand what I mean,
9:33:00
right? But what we want to is basically a landing page like this
9:33:06
colored in red or if I tell it build a calculator in the hero segment, I want a
9:33:14
little calculator here instead of the rocket. So let's go ahead and make that
9:33:19
possible. The reason we really really need this is not for continuous conversation. The more important reason
9:33:25
is AI can make mistakes. You already saw that sometimes it forgot to add use
9:33:30
client. And we want to allow our users to say, "Hey, you made a mistake. You
9:33:36
forgot use client." Because if I just give it that right now, it will have no
9:33:42
idea what I'm talking about. it has no idea that previously it created this. So
9:33:48
let's improve that. Let's fix that. What we're going to do is the following. We're going to go inside of our
9:33:56
functions.ts and in here let's go right after we do
9:34:03
sandbox ID and let's do const
9:34:09
messages and let's do await step.r run
9:34:15
get previous messages. It is an asynchronous arrow function like this.
9:34:22
And then let's do con formatted messages and give it a type of message which you
9:34:30
can import from inest agent kit. So I can put type message here as well
9:34:37
and set it to be an empty array. And now let's fetch the messages using await
9:34:43
prisma messages and let's do find many
9:34:49
where project id is event data project
9:34:54
id like that and let's add order by
9:34:59
created at descending and then for con message of messages
9:35:08
let's go ahead and push each message to this new array. The reason we are doing it like this is so that we have this
9:35:15
type which cannot be uh broken. So formatted messages
9:35:22
dot push type text ro if message ro is assistant it will be
9:35:32
lowerase assistant otherwise lowerase user like this. And the content is going
9:35:39
to be message dot content. And let me just see what uh what is the problem
9:35:47
here. Formatted messages. Oh, it should be an array of message. My my apologies.
9:35:54
There we go. And then let's go ahead and let's return formatted
9:36:01
messages. There we go. So right now it it is going to have context of the entire
9:36:07
conversation. and it will know exactly what we told it. It will know exactly what it responded back to us. So now
9:36:13
let's go ahead and let's create a const state to be create state from agent kit
9:36:20
again. So create state from inest agent kit.
9:36:25
Let's give it a type of agent state. So we already have agent state defined
9:36:31
right here. We have summary and files. And let's go ahead and do the following.
9:36:37
The first object in here will be summary make it empty and files make them empty.
9:36:44
And then in the second object you will have messages which will be previous messages.
9:36:51
And now we have the state. So now we have to add this state uh to a couple of
9:36:57
places. So let's go ahead and find our network execution right here. And let's add default state
9:37:05
to be the state from above. And in the result when we run it, let's add state
9:37:13
and make it state or you can use the shorthand operator like this. Perfect.
9:37:18
So let's go ahead and do this again. Build a landing page. Let's do that.
9:37:25
Build a landing page. And let's follow the context here. As you can see, we now have a step get previous messages. And
9:37:32
you can now see that we included all of the new all of the older messages even
9:37:38
the responses and the user messages here. So now the code agent as you can
9:37:43
see has messages. So it knows exactly what we ask it to do now. So let's go
9:37:50
ahead and wait for this result right here.
9:37:55
We should see it any second. And you can see how it preserved the red color because that's what we asked previously.
9:38:02
So it already knows the context. And now this is what I'm going to say. Add a
9:38:07
calculator in the hero segment.
9:38:12
So I didn't tell it to create a landing page. I didn't tell it anything other
9:38:18
than this. And let's see how well it will do. Of course, it can make a mistake even at
9:38:23
this point. But now it has the context. It knows that add a calculator in the hero segment is the message after build
9:38:32
a landing page and it is a message after uh created a polished fully responsive
9:38:38
red themed landing page. So let's see if it was able to do this or not.
9:38:45
We should see any second now. Uh and looks like it wasn't able to do it. Let
9:38:50
me refresh just in case and let's see the code.
9:38:56
Looks like we didn't add it. So, let I just want to make sure that I
9:39:02
didn't accidentally maybe do the incorrect order of loading the messages here.
9:39:10
Created at descending. I think that should be okay. Let's try again. You
9:39:17
didn't add the calculator component in the hero page. add the calculator
9:39:25
component. So in the previous examp when I tried this privately off camera, it worked for
9:39:32
me. So you can see that AI is sometimes a bit unpredictable, but I just want to tune it, you know. Uh we might even have
9:39:40
to modify the prompt for this. We might have to tell it you have context of all
9:39:45
older messages. You can use older messages, right? But you can already see
9:39:51
a slight improvement, right? Because right now when we asked it to create that landing page, uh it's it made it
9:39:58
red, right? So it understood the context, but I have a feeling it is still not understanding entirely what we
9:40:05
want. Let's see if this will be better. And there we go. We now have a very very simple calculator in our landing page.
9:40:13
Great. So this is exactly what we asked. Let's try and do make it green now just
9:40:20
to make sure that this is the last message it sees. Right? I want I'm okay
9:40:25
with adding state. I just don't want to make it so that it conf it's confused
9:40:31
about what is the latest message. So let's follow along in the running here.
9:40:36
So yes, make it green is the first message in the array here. Maybe that should be the opposite. I don't know
9:40:45
because maybe it's now thinking that this the last message in the array is the newest one. And let's see the coding
9:40:53
agent. I think the coding agent understands the same thing maybe or not.
9:41:00
Yeah, in here it also the last message here is build a landing page. So I keep thinking that maybe
9:41:07
or maybe not. Yeah, you can see that it preserved the fact that it's a landing page. It added the calculator and it ma
9:41:14
changed it green. So obviously now it understands what we are doing. So I'm going to go ahead and add a little to-do
9:41:21
here. To-do change to ascending if AI does not
9:41:30
understand what is the latest message.
9:41:36
But I think that it works pretty well. I think that it understands that make it green refers to the landing page which I
9:41:44
scolded it for because it didn't add the calculator. So now it has both the calculator and it is green. And I think
9:41:50
that's exactly what we wanted. So let's try and just do one more time make sure
9:41:56
to use separate component files.
9:42:02
And while this is happening uh let's go ahead and do the following. I want you to visit my uh public assets folder or
9:42:10
the source code. You can use the link in the description or the link you can see on the screen. And in here I added a new
9:42:16
file called additional prompts. And in here I have the response prompt and the
9:42:21
fragment title prompt. So go ahead and copy this entire file. Go inside of your prompt.ts
9:42:28
and at the end of it or if it's easier you know at the top just add those two
9:42:33
and export both of them. So export the fragment title and export the response
9:42:38
prompt. We're now going to use this to create two more agents so they create better responses
9:42:46
and so they create a proper name here. So let's see what it did. There we go. So it understood the context. It it
9:42:53
seems to again made it red. Uh I keep thinking that the way we are loading these previous messages maybe isn't
9:43:00
perfect. So, you're going to have to tweak that a little bit or maybe you can
9:43:05
somehow um maybe you can somehow modify it so that
9:43:10
it knows you can add it in the content like maybe let's see
9:43:16
I'm thinking of keeping a track of the index and then maybe we can modify the content and like say first message and
9:43:23
then the message content like something like that and then maybe
9:43:30
In here we can keep track of index and then replace this with the index for example. Maybe that can instruct it
9:43:36
better to understand what's going on. But uh what's important is that it at
9:43:41
least understands the last message right that's what I want to make sure. So I
9:43:46
just told it to use separate components and that's exactly what it did. It preserved the fact that it's a landing
9:43:52
page but it made it uh into separate components. Let's do make it green or
9:43:58
let's do make it yellow. this time you know keep testing it make sure that it's listening to you and you can play around
9:44:04
with changing the order here you can use that idea that I told you uh you can
9:44:10
even explore you know in justest documentation about the state maybe in there we can find something uh I will of
9:44:16
course research off camera and in the next chapter I will tell you more information if I find out anything new
9:44:22
but what I want to do now is the following in the function here after the network
9:44:28
finishes. So right here after we get the result, I want to go ahead and I want to
9:44:35
do uh the following. So I want to create
9:44:40
an agent called fragment title generator and that will be create
9:44:48
agent like this. And let me just see I already
9:44:53
forgot how do we create agents. So the name will be something and then
9:44:59
the description and then the system and then model. Okay. So I will just copy this.
9:45:04
Let's add it all over here. So the name will be fragment title generator.
9:45:11
A description will be a fragment title
9:45:16
generator. And for the model we can use open AI and you can use a cheaper model. You can use
9:45:22
4.0 for example. And you can remove the default parameters here. So in here use a cheaper model because this will just
9:45:28
generate text and in here go ahead and use the fragment title prompt which we
9:45:34
just added and also now import the response prompt.
9:45:40
So let's go ahead and use this. Now after this go ahead and copy it and now
9:45:46
this will be response generator. Change this to be response generator and
9:45:54
a response generator and change the system here uh to be
9:46:01
response prompt. And now you're going to define two outputs. The first output
9:46:07
here will be t uh fragment title await
9:46:13
fragment title generator run. And inside of here you will pass
9:46:20
the result state data summary. And then you're going to copy this. And
9:46:26
this will be response response generator from the same thing.
9:46:32
And then you're going to go inside of save result.
9:46:38
And for the fragment title, go ahead and do the following. Fragment title dot uh
9:46:45
first in the array dot type is equal to text fragment title first in the array
9:46:52
dot content otherwise just fragment like this and let me just see content is
9:47:00
this um okay let me just build a little function
9:47:06
uh so we don't have to do this in one file so we have fragment title
9:47:13
output and we have response output here. So I'm going to just collapse this
9:47:24
and then in here I'm going to do con generate fragment title
9:47:30
and I will do if fragment title output type is not
9:47:38
equal first in the array of course the text return fragment ment
9:47:48
otherwise let's go ahead and do if fragment title generator first in the array
9:47:54
content and let's check maybe if is array
9:48:02
can I do this uh array is array I think
9:48:11
fragment title output because this can be an array Okay, then let's return
9:48:17
fragment title output first in the array.content.m map
9:48:24
text join
9:48:34
like this. So basically this should always return a string
9:48:40
and otherwise just return
9:48:46
in the else here just return the content
9:48:56
and let me just see so this is a type of string here
9:49:02
uh and well you can just add another safety one fragment And okay, but this
9:49:08
is unreachable. So I don't know why exactly uh string is not uh okay. Yeah, my bad.
9:49:19
And now go ahead and copy this and call this generate
9:49:25
response. And basically the same thing. So response output.
9:49:34
And in here we're going to just set the default to be here you go.
9:49:42
Otherwise it can be this. And now when we have those two in here we can put generate
9:49:50
fragment title. And in the content we can do generate
9:49:56
response. There we go. And this should now improve
9:50:02
uh our app. So let's see if that is uh true or not. So I'm going to do build a
9:50:09
let's actually start a new project just to make sure everything is clear. So build a calculator app
9:50:16
like this. And let's follow the ingest to see if we're going to mess something
9:50:22
up or not. I mean technically I don't think it will ever be an array of items
9:50:28
that we're going to have to join like this. It will almost always certainly be just this, but uh yeah, I guess we're
9:50:37
trying it out. So, we successfully did this fragment title and we successfully
9:50:44
did response generation. So, let's see what it came up with. There we go.
9:50:49
Here's what I built for you. A snazzy calculator app with a sleek responsive design. And we have a name this time for
9:50:56
the fragment calculator app. So that's what I wanted us to achieve, right? If
9:51:01
you don't want this, you don't have to use it. I mean, the app worked just fine before this. So if this for some reason
9:51:08
messes up your app, you don't have to use it. Of course, I just thought it would be, you know, fun to add that as
9:51:15
well. And you can definitely write this in a better way. I mean, starting with the fact that we can just do con title
9:51:22
and just make it this. So let's do output
9:51:29
and just make it this like so. There we go. This is already better. And
9:51:37
then you can do the same thing here. Con output. Change this to this.
9:51:45
And then replace all instances here.
9:51:50
There we go. And you can probably also just use a
9:51:56
single function because it's exactly the same. So let's maybe do parse
9:52:02
uh agent output. And in here let's go ahead and see this is a type of uh
9:52:10
message or array. So let's try value message
9:52:16
array like that. And then can I just use value
9:52:24
con output value first in the array? Yeah, that works as well. So parse agent output
9:52:32
then is the only function you need and you can then put it maybe at the top
9:52:38
of the file and we are later going to move it to libs. So basically parse agent output and in
9:52:46
here it accepts the value which is a message which is an array. The message is a type of message from agent kit. And
9:52:53
now that we have parse agent output. Let's go down here
9:53:00
and keep the fragment title generator, keep the response generator, keep the two outputs and remove generate response
9:53:07
function. And now what you're just going to do is
9:53:13
parse. How did I call the function? Uh, parse agent output.
9:53:21
And in here, you're going to parse response
9:53:27
output. And in here, you're going to pass
9:53:33
fragment title output. There we go. And then you can move this function
9:53:40
to utils here in the ingest. So export const parse agent output and
9:53:47
import message from inent uh inest kit here. There we go.
9:53:55
Then you can remove it from here. Find some place you're using it. And then
9:54:01
there we go. Import from utils like this. And let's just do a sanity check
9:54:07
here. Uh make the calculator use glossy
9:54:13
glassy design or something like that. The only thing I'm trying to do here is
9:54:20
again confirm it can kind of understand the context of my previous messages and
9:54:25
that it will give me a nice response with a name for my fragment. So we can
9:54:31
follow again inside of the running here to make sure that's what's happening.
9:54:37
There we go. Fragment title generator response generator.
9:54:42
And let's see. Here's what I built for you. A sleek glassy design calculator app with a modern twist. Very cool. So
9:54:50
it understood that we just wanted a glassy design on top of our previous
9:54:55
app. Amazing. I'm very very satisfied with this. Uh, and I think that marks the end
9:55:03
of this chapter. As always, you know, your app worked just fine up until this point. So, don't let uh this ruin your
9:55:11
project if you don't like it or, you know, feel free to research a bit yourself about whether this should be
9:55:17
descending, ascending. Uh, and if this is failing for whatever reason, the
9:55:24
fragment title generator and the response generator, you can also remove them. You don't need them. And make sure
9:55:29
to just use a cheaper model here simply because you can even use an entirely new
9:55:34
model, you know, like uh Gemini, Grock, whatever, because we are not calling any
9:55:40
tools here. So, just make sure this is something cheap so it doesn't spend your credits for no reason when it's just
9:55:46
generating some text. Uh, amazing. So, 18 agent memory. Let's go ahead and
9:55:51
review that. I'm opening a new branch here. 18 agent memory.
9:55:59
I'm going to stage all of my changes. 18 agent memory. And I'm going to commit
9:56:05
and I'm going to publish the branch. Let's go ahead and open a pull request.
9:56:12
And let's review our changes.
9:56:18
And here we have the summary. We enhanced message handling by retrieving and formatting previous messages for
9:56:24
improved agent interactions. We added automated generation of concise
9:56:30
userfriendly summary messages and short descriptive fragment titles. We updated
9:56:35
the process for saving results to use dynamically generated summaries and titles instead of static content. And we
9:56:42
introduced utility functions and structured prompt templates to standardize agent outputs. And in here
9:56:48
we have just one comment and that is that we should probably check if the value is actually valid. Um so yeah we
9:56:56
could add this as well and I just noticed that we return the text fragment
9:57:02
as placeholder even though we use this both for the response and for the fragment title. So, I should probably
9:57:08
add a new value, something like fallback value, something like that. We'll see.
9:57:15
Uh, nevertheless, very satisfied with this one. I will research before the next chapter if there's something we can
9:57:21
do uh better when it comes to adding message history. But I think this is as
9:57:28
good as we can do right now. Uh, great. So let's go ahead and change this to
9:57:34
main and let's synchronize our changes and we should see our new poll request
9:57:40
being merged. Amazing. Uh I believe that marks the end of this chapter. Amazing
9:57:46
amazing job and see you in the next one. In this chapter, we're going to go over
19 Bug Fixes
9:57:53
some final bug fixes and improvements in our application. This will include
9:57:58
learning how to increase the sandbox expiration, making A2B template private
9:58:04
so no one else other than your team can use it, improving our conversation history from the previous chapter, and
9:58:11
overall error handling improvement in our application. So, let's start by learning how to make our sandboxes last
9:58:18
longer. As always, ensure that you're on your main branch and make sure you have
9:58:23
synchronized your changes. The last chapter we we merged was 18 agent memory. So let's learn how to increase
9:58:30
sandbox expiration. Right now inside of our application if I visit uh even this
9:58:37
one 4 minutes ago, okay, this one works. But if you visit anything older than 5 minutes ago, it will show this the
9:58:44
sandbox wasn't found, which is not ideal if you're doing some presentation or if you're showcasing this to someone. So
9:58:51
here's what how you can increase your timeout. So the sandbox life cycle it
9:58:56
will stay alive for 5 minutes by default but you can change that using the timeout parameter. Now of course
9:59:02
depending if you are on free tier or if you're on premium tier you have different limits. On premium tier you
9:59:08
can keep it alive up for 24 hours but on free tier which we are on we can keep it
9:59:13
alive for 1 hour. So for example let's find something in between. Let's use uh
9:59:19
half an hour. I think that's a fair amount. So all you can do is go inside
9:59:24
of your functions inside of the ingest folder and in here when you create it go
9:59:30
ahead and do await sandbox dot set timeout and now you have to enter in
9:59:37
milliseconds right and in here you can see so the maximum time a sandbox can
9:59:43
can be kept alive is 24 hours for pro users and 1 hour for hobie users. So, if
9:59:50
you want to, you can set this and then this will be alive for an hour. But keep
9:59:56
in mind, the longer you put this, the more credits are you going to spend. So, what I recommend is, you know, find a
10:00:03
middle ground. This is half an hour. So, you can put this instead.
10:00:09
Uh, and you also have this util here, I believe, get sandbox. Now, in here,
10:00:18
it's also important to increase it, but you don't have to put half an hour here,
10:00:25
but um yeah, let's be consistent. And let's put half an hour here as well. I just want to be careful and I don't want
10:00:31
you to spend all your credits, but perhaps maybe add this to some kind of
10:00:36
constant here. Types.ts DS export const sandbox timeout
10:00:43
and add a comment 30 minutes in milliseconds like this. And then you can
10:00:49
consistently use it in different places and you can easily change it if you change your mind. Let's go ahead and add
10:00:56
that here. Sandbox timeout. There we go. So now we know how to increase our
10:01:03
sandbox timeout. And I will try this out. I will do build a uh calculator app
10:01:08
here and you know at the end of this chapter I'll I'll see if it still exists
10:01:13
if it manages to do it without errors. So let's see what else do we have to do here. We just learned how to increase
10:01:20
our sandbox expiration. Uh I'm going to leave this for last simply because we are in the middle of generating. Uh so
10:01:27
let's go here. Improving conversation history. So in the previous chapter we
10:01:33
learned that we can add previous messages and we can add it to the state and I've been experimenting a bit and I
10:01:40
think I found kind of a perfect combination. So what I think we have to do is we have
10:01:48
to limit our messages history because the longer the history the more confused
10:01:54
the model gets. At least that was my experience. So, I limited it to five messages. I'm pretty sure it would work
10:02:02
great with 10 messages also, but five was somehow the sweet spot where I was able to keep a conversation going and do
10:02:08
some small changes uh constantly. And then the proper one is actually created
10:02:15
at descending, but make sure that you do reverse in here. So, it's actually
10:02:22
ascending. You need ascending here. But since we're limiting the take, we need
10:02:28
to offset, right? You can also do the offset thing. Actually, it is skipped in Prisma, but honestly, I'm not really
10:02:36
sure if we need to do that. And we can just do it descending and then just reverse them here. And this, in my
10:02:42
opinion, gave me much much better results than anything else. So again, I
10:02:49
invite you to experiment. But once I did this, so I keep this at descending. I
10:02:54
limit this take to five and I reverse the formatted messages. And this made the AI understand much better what I'm
10:03:01
building. So for example, let me do make it glassy design.
10:03:07
I'm going to try and do this. So we're going to see. Okay. So we did that. We
10:03:14
improved the conversation history. And now let's talk about error handling. So,
10:03:19
uh, error handling in our app currently doesn't exist outside of TRRPC procedures, which means that all of our
10:03:27
suspense can go wrong. So, here's what we can do. We can do npm install react
10:03:34
error boundary. And let me show you my version here. So,
10:03:39
package.json React error boundary 6.0.0.
10:03:46
And then let's go ahead and find a random suspense here for example for loading the project. So how about we add
10:03:54
error boundary here and wrap it in suspense.
10:04:01
This is how you do error handling if you want to do it on a segment level. Nex.js
10:04:09
also comes with its own error boundaries which are written the same as pages. you
10:04:16
would have error.tsx. You can of course add this as well, but I want to show you this. So, uh I'm not sure if this is
10:04:23
error boundary from react error boundary.
10:04:30
Okay, I think it needs to be like this. There we go. And then in here you would add a fallback
10:04:37
error like this. So, first let me just check if this is working. There we go.
10:04:43
Glassy design. glassy calculator you can see it understands the context perfect
10:04:48
so let me show you this now uh so first without error boundary so comment out
10:04:54
error boundary I'm working inside of project ID let's go inside of uh projects get one here and in the query I
10:05:03
want you to throw new tRPC error here with code bad request
10:05:11
and refresh here And in here you can see it's loading project. It's loading
10:05:16
project. Oh uh yes my apologies. No u uh I I'm
10:05:23
trying to demonstrate this but I forgot we commented out error boundary and this happens then this is obviously not good.
10:05:30
We don't want this to happen. That's why we have error boundaries like this. So go ahead and refresh now. And again it
10:05:38
will keep trying to do this for 3 seconds for three attempts. one two
10:05:44
three and then finally it will hit the error and this is what you can then
10:05:50
design as your error page right so what's important is that the error
10:05:55
boundary is around suspense now this doesn't make too much sense
10:06:00
because I am wrapping the whole page here right but imagine if course let's
10:06:08
just remove this TRPC error from here imagine the case where I'm doing where
10:06:16
is it UI components where I have the project header here right so let me see
10:06:21
where do I render project header in the project view so go inside of your project view and in here we have
10:06:28
suspense so the error boundary from react error boundary would make a lot of
10:06:33
sense here fallback project header error
10:06:40
like that or in here error boundary again around this suspense
10:06:48
with the fallback messages container error.
10:06:54
So now let's say we go inside of the messages here. Let's go uh inside of
10:07:01
messages get many and let me just try and do this. So throw new tRPC error here. code bad request. So something
10:07:09
happened here and let's go ahead and refresh here. You can see that the project has loaded and you can see it's
10:07:15
trying to load messages. It's trying to load the messages until eventually it fails. And since we added the boundary,
10:07:23
we only see messages container error. But if you didn't have that here in the
10:07:28
project view, if you didn't wrap the error boundary, let's see what would happen then. So let's refresh again. So
10:07:35
it's loading messages. It's loading messages and you already know what will happen. The entire screen will error. So
10:07:43
just like minimizing the loading state, you can use the error boundary to minimize the error state. So that's what
10:07:50
you would do, right? That's why we use the error boundary. So I would recommend, you know, finding all the
10:07:56
suspenses that you use in your project. And I think these are the only three. So we just added to all of them, right? And
10:08:03
you can also do the following. You can also add inside of source app. You can add a page called error.tsx.
10:08:12
Now this has to be a client component and in here make sure to call it error
10:08:17
page. Don't call it error. This is a reserved keyword. Call it error. And you can return here global error. You can of
10:08:25
course design this however you want. But this is useful. So this right now
10:08:31
doesn't do much. But let's go ahead and do this. Let's go inside of project ID and let's say we forgot to wrap this
10:08:37
error boundary here. So now uh and yes uh also go to project
10:08:43
view and comment out the error boundary here.
10:08:50
Now the error the global error takes care, right? So that's how the global error works. So if I didn't have this,
10:08:57
let me just remove it. Now if I didn't have this, this is what would happen.
10:09:02
Let's say we forgot all the inner error boundaries, right? This happens. So, this is the one thing
10:09:10
you don't want to happen. This error just looks ugly. It looks like something really, really broken, right? That's why
10:09:16
you want to make sure that you have the inner error boundaries. You want to make
10:09:22
sure that you have your individual page error boundaries and you should also
10:09:27
have your app error.tsx the sx simply because it is the last
10:09:34
line of defense in case something goes wrong. Perfect. So now let's go back
10:09:40
inside of our messages procedures here. Let's just remove the throwing of the
10:09:46
error here. There we go. Perfect. Now what I want to do is I just want to
10:09:52
go to the usage dsx here component. And I'm really worried about this format duration for a
10:09:59
simple reason. Dates can often cause errors and it would be very stupid if
10:10:05
our entire app here fails just because the date is invalid. So here's uh what I
10:10:13
think we can do. Let's go ahead and try it. So
10:10:19
I'm going to open a function like this. And let me
10:10:25
just close it here. And I'm going to open curly brackets here. Let me close that here.
10:10:34
And I'm going to open Actually, here's what I'm going to do.
10:10:40
Instead of trying to do it here, I'm going to just do const reset time use
10:10:46
memo like this. Make sure you added use memo from React. And then inside of here,
10:10:54
what we're going to do is we're going to open the try and we're going to open catch. And in here, let's add an little
10:11:00
error. And let's do console error. And let's do error formatting
10:11:06
duration error like that. And let's simply return
10:11:13
soon. So it will just say or maybe unknown or whatever you think is better user
10:11:19
experience, right? And then in here let's return format duration and then inside interval to duration and then
10:11:28
start new date and let's me just copy it
10:11:35
and will be this. And then we're just missing the format here.
10:11:42
There we go. And in here let's add ms before next. And then we can use this
10:11:49
constant here. So resets in
10:11:55
reset time. Let me just check if it still works. There we go. Resets in 29 days and 20
10:12:04
hours. Because now if you if this MS before next happens to be something like not a number.
10:12:11
There we go. Resets in now doesn't work and it doesn't break the page.
10:12:17
That's what I at least wanted it to happen. Okay,
10:12:24
perfect. So, now that we have this actually, I mean, we can try it out by doing throw new error. Whoops. And now
10:12:31
it should say resets in unknown. Basically, it cannot block the page. It can still allow the user to work, which
10:12:39
is what we wanted. Um, perfect. So, this is very good. Let's see what else we
10:12:44
have in the list here. So we learned about improving the error handling and now let's talk about making our E2B
10:12:50
template private. So if you go inside of your E2B dashboard in here you can see your templates and you can see that my
10:12:56
Mine Nex.js test 2 is currently public. That is because we have published it.
10:13:03
The reason I told you to publish it is because I personally had problems with private uh templates. But what you can
10:13:11
do is the following. Open your terminal. go inside of sandbox templates. Go inside of Next.js
10:13:18
and since inside of here we have a E2B TOML file. We can easily
10:13:25
just do E2B template unpublish. You don't have to add any other flags. It
10:13:31
will read everything from here including your team ID. And just confirm that you
10:13:36
want to unpublish it. And what this does is the following. If you now go back here and refresh,
10:13:43
you will see that my Mine next.js test 2
10:13:48
is now set to private. And that means that inside of the functions on the ingest here, whenever someone tries to
10:13:56
create a sandbox with that, this will fail unless in their environment their
10:14:02
E2B API key belongs to my organization. So what I suggest you do now is
10:14:09
definitely try. So let's try make it red.
10:14:15
And you can see that these sandbox are still going strong. So we def it definitely works what we increased the
10:14:21
timeout for. So now what I'm interested in will this still work now that I have made my template private and I think
10:14:28
that it does since I can fetch the sandbox ID. For me, it happened that the sandbox ID was not able to be fetched
10:14:35
once I changed it to private. So, just make sure that it still works here.
10:14:40
Let's see. Make it red. There we go. And you can see how the
10:14:46
conversation history is improved. It made it glassy and red. Exactly what we
10:14:52
wanted. So, we definitely improved the conversation history here. And for me, it seems to still be working. If for
10:14:58
whatever reason yours stopped working, it shouldn't but you know it happened to me so maybe it will happen to you. You
10:15:04
can easily go inside of here inside of next.js and just run E2B template
10:15:10
publish. You don't need any arguments. You can just press publish and then you can confirm.
10:15:17
And then from here you can go back inside of here, go inside of your templates and see the status. Make sure
10:15:24
it's public. And you can even do that from here I think by clicking here if
10:15:30
you want to. Um, perfect. Amazing. So I think that's all we wanted to fix. And
10:15:37
there is one thing left to discuss and that is let's just search for to-do.
10:15:43
Instead of messages container, we're using refetch interval as the live message update. And I was thinking about
10:15:50
what I should do instead of this. But initially I built a project like this
10:15:55
and it worked just fine. So the thing is this is not a multiplayer chat. This is
10:16:01
a single person chat who receives responses from AI and most of the time
10:16:06
you only send one message and then wait for the other message to uh come back.
10:16:12
And we are not just doing any kind of polling. We are doing polling using the tan stack query. This means that this
10:16:19
refetch interval will ddup it will use cache. It will be an extremely optimized interval. And also, I'm not sure if you
10:16:26
knew this, but while right now new requests are being made every 5 seconds,
10:16:33
if I change to this page, requests stop being made. So, you don't have to worry
10:16:39
that in the background it's constantly going to fire. It is a very very optimized polling and it actually makes
10:16:46
no problem to use in our type of application here and in fact you can
10:16:51
even reduce it to 2 seconds if you want to. This will give you a better experience and it will still be very
10:16:57
very optimized. Now in case you're wondering uh okay but does inest offer
10:17:04
any uh realtime updates? They absolutely do.
10:17:09
You can go inside the documentation and read about a real time. So in here you can subscribe to a channel and then from
10:17:16
the function you can initialize uh you can publish to that channel. And I
10:17:21
explored this option but the problem was I wasn't able uh to synchronize both my
10:17:27
Prisma messages and uh the ingest subscription messages. It is absolutely
10:17:33
possible uh and it can be a good homework for you if you want to give yourself a challenge and do that. For
10:17:39
our use case, polling is more than enough. So I will just remove this from here. And if you want to, you can move
10:17:46
this into a constant. So you can change it easily if you're using some polling in multiple places. Uh great. Amazing.
10:17:54
So I believe we are now ready to deploy. I don't think there's anything else we have to do here. So let's go ahead now
10:18:02
and let's merge this. So 19 bug fixes.
10:18:07
I'm going to go ahead and open a new branch. 19 bug fixes.
10:18:15
I will stage all of my changes. 19 bug fixes.
10:18:20
And I'm going to commit. And I'm going to publish the branch. Uh, and since these changes were very very minimal, I
10:18:28
think we can just go ahead and merge them because they were just some very small bug fixes here, we can do our own
10:18:36
review here. So, we added React error boundary. We added global error page.
10:18:42
We added some wrappers here, error boundary. We added the proper sandbox timeout. We
10:18:49
properly uh reverse the messages. So the conversation history is improved.
10:18:55
We use the same sandbox timeout in the utils here. We reduced the refetch
10:19:01
interval. We made it safely here to fetch the reset interval. And we just
10:19:06
added some more error boundaries. That's it. Nothing else needed here. We can merge this request immediately. Amazing.
10:19:14
Amazing job. That marks the end of this chapter. As always, go back to your main
10:19:20
branch here and synchronize the changes and then confirm in the source control that you just merged 19 bug fixes.
10:19:28
Amazing, amazing job. And see you in the next chapter where we are going to deploy our app.
20 Deployment
10:19:35
In this chapter, we're going to go ahead and deploy our app to Verscell.
10:19:40
This will include the initial deployment. After that, we will obtain our app URL. Then we have to update our
10:19:49
environment variables with that new URL and we have to redeploy and after that
10:19:54
we have to connect inest to our versel project and redeploy once more and after
10:20:00
that we are ready to test the app. So let's start with step one deploy to
10:20:05
versel. So make sure that you are on your main branch and make sure the last one was 19 bug fixes. You can
10:20:13
synchronize your changes if you haven't already. And at this point, you can also shut down your terminal. No point to
10:20:19
have this running while you are deploying. Now, let's go ahead and make sure that
10:20:26
you have a GitHub repository, right? I don't know if you followed the Git workflow through this tutorial, but if
10:20:33
you have, then you have a GitHub repository. So, head to Verscell and
10:20:39
click add new project. And in here, if you are connected with GitHub, you have
10:20:44
your project right here. I'm going to click import. And then I'm going to open environment variables. And in here, I'm
10:20:52
going to go into environment. And I'm going to copy all of them. And then I'm
10:20:58
just going to paste them inside. So database URL, next public app URL, open
10:21:03
AI API key, E2B key, and all of these other ones. And let's click deploy. We
10:21:10
are now going to see the result of this. Perhaps it will succeed from the first try or maybe it will fail. I'm going to
10:21:17
pause the screen and show you the result. And my deployment failed with a bunch of
10:21:25
errors and I forgot about the first rule of deploying to Verscell and that is
10:21:31
that you should try building locally first so you don't waste time with
10:21:36
failed Verscell deployments. And we also forgot about one more important thing
10:21:42
and that is that when we deploy the versel, we need to add a post install script. So let's go ahead and do a post
10:21:49
install script and add it to our package.json here. Let me just add it
10:21:55
here. Let me just check where do we add it in the scripts. Okay, so post install
10:22:01
prisma generate like this. So now I'm going to go ahead and do npm run build
10:22:08
locally and I'm going to see if I have any more errors and I'm going to show you how do you trigger a deployment
10:22:15
again if your initial one failed. Basically from here you have buttons to
10:22:20
go to project or to inspect deployment. You can click whichever one you like. Uh and from here you basically have your
10:22:28
project Mine. You can click here and there we go. You have deployments. the first deployment was failed and now the
10:22:35
way another deployment will be triggered is simply whenever it notices a new push
10:22:40
in the GitHub. So now let's go ahead and see what we have here. So I seem to keep
10:22:46
having these errors seemingly coming from here.
10:22:51
These errors seem to be coming from source generated. So it seems to be
10:22:56
linting this folder when it should not be linting this folder. So, I'm going to look into how I can prevent the app uh
10:23:04
the build from looking at the generated folder right here and I'll tell you what
10:23:09
I find. Okay, I have managed to find the
10:23:14
combination which enables npm run build. So, just to remind you, the last change
10:23:20
we did was we added post install to the scripts. We still need this regardless.
10:23:26
So there are different ways you can fix the failing lint because the failing linting is what's going on here. One
10:23:32
solution is to go to the next config here and add slint and enable ignore
10:23:39
during builds. Now this isn't exactly recommended but you can see that once
10:23:44
you add this slint will not fire during the build process or at least it won't
10:23:51
fire in production. But you can see that in here it works perfectly fine now.
10:23:56
Well, whereas if you don't have this feature and you try mpm run build, it is
10:24:02
going to fail because it will try to lint our source generated uh folder.
10:24:08
There we go. But I don't really recommend this simply because uh that will turn off linting for your entire
10:24:15
project during the build and there's no need for that because what we can do instead is we can go inside of
10:24:22
eslint.lint.config.mjs config.mjs here and we can open ignores
10:24:30
and in here we can target asterisk asterisk forward slashgenerated and then
10:24:37
everything inside of a generated folder. So basically ignore wherever you can find the generated folder and then
10:24:44
everything inside. And I feel like this is a little bit better solution simply because we are still going to lint the
10:24:51
rest of our project. But we are not going to lint the source
10:24:57
generated one. So if you try this now, it should work. Let's wait a second. And
10:25:03
there we go. Since the linting has passed, everything else seems to be working just fine. So try for yourself
10:25:09
and choose one that works, right? If this works for you, sure, then use this.
10:25:14
But I will recommend doing this if possible for you in the estate config mjs. Perfect. Once you have these two,
10:25:22
let's go ahead and let's merge them uh like this. And let's go ahead and add
10:25:29
deployment here. We can do this in the main branch. We don't need to branch out. And then just go ahead and
10:25:35
synchronize the changes. In case you branched out, no problem. Just merge the
10:25:40
branch to the main. And once it detects a new branch to the main uh it is going
10:25:47
to uh trigger a redeployment.
10:25:52
There we go. So in here you can see that it automatically detected a new push and it's going to deploy. So let's see if it
10:26:00
succeeds this time. And here we have it. This time the build
10:26:05
succeeded. And now we have our app deployed. So you can see it's still
10:26:10
running some final uh things here, but down here you can see that we assigned a
10:26:16
custom domain and we have the deployment summary. So what I care about is the
10:26:21
custom domain. So what I recommend you do is you click on Mine up here and go
10:26:26
inside of overview and in here you will find all of your domains. Do not use the
10:26:32
deployment domain. Use this one, the shortest one that is the domain of your
10:26:37
project. You can go ahead and visit it if you want to. And what I want you to do is I want you to copy the URL that
10:26:48
you have and I want you to go back to Verscell and then go inside of settings
10:26:54
environment variables and in here find next public app URL and you now have to
10:27:00
modify this to be your new app. Just remove the forward slash like this and
10:27:06
click save. And after you do this, you can see a prompt here to redeploy. So you can click it. If you don't get the
10:27:13
prompt to redeploy, you can manually go in your deployments and then you can select the last one and you can click
10:27:20
redeploy. So let me just check if uh I'm not sure if redeployment is now happening or not. So I will just click
10:27:26
redeploy myself and just confirm. So every time you change environment variables, you have to redeploy. So I'm
10:27:33
going to pause, wait for the redeployment, and then we have to connect inest to this versel project.
10:27:42
And here we have the successful uh redeployment here. So now what I suggest
10:27:48
you do is just try and use your application. If possible, wait out till
10:27:54
this shows a success message as well. There we go. and then go to your main URL here. Always use the main URL and
10:28:02
try something simple like signing in. So I'm going to go ahead and use my account here and I will try to just create a
10:28:09
simple project. So I will go ahead and do uh you can see that all of our projects are saved. So our TRPC is
10:28:16
working here. Let's try clicking on one of these and let's try sending a message. So I would add test here. And
10:28:23
what should happen here is the following. You can see the message my message was generated but injust was
10:28:29
unable to be fired. That's because we need to connect inest to production. So
10:28:34
this will actually never finish. Let's go ahead and do that now. So use the link you can see on the screen or the
10:28:41
link in the description to visit ingest and go ahead and sign up. I suggest
10:28:46
using GitHub simply so you always have access to your repositories if needed. And then once you enter here down here
10:28:53
at the bottom you can choose to switch organization. I recommend creating a new organization. So I'm going to call this
10:28:59
Mine. And I will click create organization. And I'm not going to invite any members
10:29:05
now. And let's go ahead and click on apps here.
10:29:11
And let's go ahead and just find oh sorry integrations. I think this is what I'm looking for. And let's click on
10:29:18
Versel here to connect. Let's click connect Verscell to ingest and click on
10:29:25
add integration here. And I'm I have multiple accounts. So I'm going to
10:29:30
select this one where I just deployed the project and I will click continue.
10:29:36
And in here go ahead and find your new project.
10:29:41
So let me just find Mine. Here it is. select it and click save configuration right here and click continue to the
10:29:49
ingest uh Verscell dashboard. And now somewhere in here you have all of your
10:29:55
Versel projects and you should now find Mine and you can see it says enabled but
10:30:00
in here it says deployment protection is enabled. Ingest may not be able to communicate with your application by
10:30:07
default. Let's go ahead and click more here. And basically what we have to do is we have to configure protection
10:30:14
bypass. So in here let's go ahead and uh
10:30:19
I'm never sure how to properly access this. So don't worry I will tell you the exact steps in the versel dashboard but
10:30:27
let me just see does this take me to Verscel. It does take me to Versel here. Basically I
10:30:34
think this is where I need to go. Let's go to versel and let's select our new project here.
10:30:41
Let's go inside of settings and let's go inside of deployment protection. Here it is. So go inside of your Mine settings
10:30:47
deployment protection. And in here let's go ahead and let's do protection
10:30:55
bypass for automation. So I think this is what we need. So let's click add secret. You don't need to add any value
10:31:01
and just click save. And then in here you can copy this bypass secret. And
10:31:07
then let me go ahead and go back and click click on configure here.
10:31:13
And if I remember this correctly, you should now have deployment protection key that you can add here and click save
10:31:20
configuration. There we go. So now inest should be able
10:31:26
to access your uh Versell application. And let's go ahead and do one more thing
10:31:33
here. So now I want to go back here to production. And in here, there we go. You can see
10:31:39
that my app was already found Mine development on Versel. So this is a good
10:31:45
sign. And it has found one function code agent. So I think that this means that
10:31:50
it's running successfully. I'm just not 100% sure. I keep thinking that I need
10:31:56
to redeploy. Um so h let's see. Let's try it out. If
10:32:01
it doesn't work, it means we have to redeploy. So, go to your uh deployed URL this time and let's go ahead and do
10:32:09
build a calculator app. Let's see if that will work. And let's
10:32:15
go inside of Ingest here. Ingest cloud inest runs. And let's see if a new run
10:32:21
will appear. And the new run is right here. That would mean that we
10:32:26
successfully deployed our project and we connected inest to deployed instance.
10:32:32
And looks like we didn't need to redeploy at all. Let's just go ahead and
10:32:38
wait to see uh if this will actually work, if there are any issues we have to fix, and then we're going to be able to
10:32:45
wrap up this project. And here I have the result. So, it seems
10:32:51
to be working. This is entirely in production. So my URL is
10:32:56
Mine-bond.cell.app. And if you check the cloud here, there
10:33:02
we go. It seems to be working. Uh if it still says running, just do a refresh and it should update the status. Here we
10:33:09
go. Amazing, amazing job. You finished an amazing project. I had so much fun
10:33:16
building this. Uh I I'm sure you did as well. Make sure to test your app, you know, make sure everything's working.
10:33:23
Sometimes the easiest fix can actually be for you to redeploy again. And you can see there was obviously a deployment
10:33:29
that was running the entire time. So perhaps this happened automatically when we connected inest. You can always, you
10:33:37
know, click here and click redeploy and that will just redeploy your latest version. And now in your settings
10:33:42
environment variables, you should now see inest event keys and signing keys.
10:33:47
So that's the trick. That's what made it work. Amazing, amazing job. I think this
10:33:53
was an absolutely amazing project. Good job. See you in the next tutorial. And
10:34:00
thank you so so much for watching.
