import { useState } from 'react';

import './TwitterFollowCard.css'
export function TwitterFollowCard({ children, element, formatUserName, userName, name, initialIsFollowing }) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // const state = useState(false)
  // const isFollowing = state[0]
  // const setIsFollowing = state[1]
  //
  const handleClick = () => setIsFollowing(!isFollowing)


  const avatarUrl = `https://unavatar.io/${userName}`
  const buttonContent = isFollowing ? "Unfollow" : "Follow";
  const buttonClassName = isFollowing
    ? 'tw-followCard-button--following'
    : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="mi foto" src={avatarUrl} />
        <div className='tw-followCard-info'>
          <strong>{name || children}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} type="button" onClick={handleClick} >{buttonContent}</button>
        {element}
      </aside>
    </article>
  )
}
