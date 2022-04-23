import React, {useEffect, useState} from "react";
import ContentRender from "./contentRender";
import TestButtons from "./testButtons";
import TextBoxRender from "./textBoxRender";

function PageRender () {

    // Locks out button while animation plays
    // Feed in the ID for the button, the time for the animation to play, and the function to run in the meantime!
    const buttonLockout = (id, lockTime, func) => {
        document.getElementById(id).disabled = true;
        ()=>func;
        setTimeout(() => {
            document.getElementById(id).disabled = false;
        }, lockTime);
    }

    const [textBoxActive, textBoxActivate] = useState(false);

    return(
        <>
        <main>
            {/* <article>
                <h1>This is some Test Text!</h1>
                <span className="small">By Robin VanGilder - 04/07/2022 - tags: test, testing, lorem_ipsum</span>
                <p>Hey this is Robin VanGilder's test website, for testing colors and fonts! Check it out! We've got <strong>strong tags for emphasis!</strong> And we've got <em>em tags, also for emphasis!</em> We can try out some <a href='#'>links to other pages</a>, see how they look. Maybe mix in some code blocks like so:</p>
                <pre>Nevermind, this is annoying in React lmao</pre>
                <p>So there we have it, some nice old fashioned test text. Let's have some longer stuff too, here's some lorem ipsum:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi cras fermentum odio eu feugiat. Nibh mauris cursus mattis molestie a iaculis at erat. Amet nisl purus in mollis nunc sed id semper. Rutrum tellus pellentesque eu tincidunt tortor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Sodales neque sodales ut etiam sit amet. Sem fringilla ut morbi tincidunt augue interdum velit. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Gravida arcu ac tortor dignissim convallis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nisi porta lorem mollis aliquam ut porttitor leo a. In nibh mauris cursus mattis.</p>
                <p>Duis ut diam quam nulla porttitor massa id neque aliquam. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Egestas congue quisque egestas diam in arcu cursus. Nam at lectus urna duis convallis convallis tellus. Ut tristique et egestas quis. Sodales neque sodales ut etiam sit. In eu mi bibendum neque egestas congue quisque. Augue interdum velit euismod in pellentesque massa placerat duis. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Mauris pharetra et ultrices neque ornare. Elit scelerisque mauris pellentesque pulvinar pellentesque. Lacinia at quis risus sed. Lobortis elementum nibh tellus molestie nunc non blandit massa. A diam sollicitudin tempor id eu nisl nunc mi ipsum.</p>
                <p>Neque ornare aenean euismod elementum nisi quis eleifend. Donec adipiscing tristique risus nec. Molestie nunc non blandit massa enim nec. Arcu odio ut sem nulla. Natoque penatibus et magnis dis parturient. Nulla pellentesque dignissim enim sit amet venenatis urna cursus. Id diam vel quam elementum pulvinar etiam non. Risus in hendrerit gravida rutrum quisque non tellus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nisi lacus sed viverra tellus in hac. Aliquet bibendum enim facilisis gravida neque convallis.</p>
            </article> */}
            < ContentRender url_slug='this-is-some-test-text' />
            < ContentRender url_slug='test-post' />
        </main>
        < TestButtons lockout={buttonLockout} boxActivate={textBoxActivate} textBoxActive={textBoxActive} />
        < TextBoxRender boxActive={textBoxActive}/>
        </>
    )
}

export default PageRender;