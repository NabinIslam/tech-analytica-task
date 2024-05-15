import React from 'react';

const GridProductsSkeletons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
      <div className="animate-pulse h-[440px] bg-slate-100 rounded-xl border"></div>
    </div>
  );
};

export default GridProductsSkeletons;
