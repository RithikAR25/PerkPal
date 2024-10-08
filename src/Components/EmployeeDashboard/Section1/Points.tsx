/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import CountUp from 'react-countup';
import rewardsimg from '../../../assets/Images/EmployeeDashboardAssets/reward.png';
import './points.css';
import { PointData } from '../../CustomHooks/CustomHooks';

type PointProp = {
  points: PointData | null;
};

const Points: React.FC<PointProp> = ({ points }) => {
  if (!points) {
    return <p>No data available</p>; // Handle loading or error states if needed
  }

  const { totalPoints } = points;

  return (
    <div className='points-card'>
      <div style={{ padding: '15px', paddingLeft: '10px', paddingRight: '10px' }}>
        <div>
          <p style={{ paddingLeft: '40px', fontSize: '15px', fontWeight: '600' }}>Total Points</p>
        </div>
        <div className='points-img'>
          {totalPoints <= 90000 ? (
            <>
              <p style={{ fontSize: '50px', fontWeight: '700' }}>
                <CountUp delay={0.2} end={totalPoints} />
              </p>
              <img className='reward-icon' src={rewardsimg} alt='Reward Icon' />
            </>
          ) : (
            <div style={{ color: 'red', fontWeight: '700', fontSize: '18px' }}>
              Wow. So talented. You broke the meter.
            </div>
          )}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Points;
