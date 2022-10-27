import React from 'react'
import AchatFormation from 'components/Cards/AchatFormation'
import CardProfile from 'components/Cards/CardProfile'

export default function Achat() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <AchatFormation/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
        <CardProfile />
        </div>
      </div>
    </>
  )
}
