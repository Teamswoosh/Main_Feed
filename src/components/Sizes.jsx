import React from 'react';
import style from '../styles/style.css';

const Sizes = () => (
  <div>
    <div className={style.chooseSizeAndGuide}> 
      <h6 className={style.chooseSize}>CHOOSE SIZE</h6>
      <h6 className={style.sizeGuide}> Size Guide</h6>
    </div>
      <table className={style.table}>
        <tbody>
          <tr>
              <td>M7/W8.5</td>
              <td>M7.5/W9</td>
            </tr>
          <tr>
            <td>M8/W9.5</td>
            <td>M8.5/W10</td>
          </tr>
          <tr>
            <td>M9/W10.5</td>
            <td>M9.5/W11</td>
          </tr>
          <tr>
            <td>M10/W11.5</td>
            <td>M10.5/W12</td>
          </tr>
          <tr>
            <td>M11/W12.5</td>
            <td>M11.5/W13</td>
          </tr>
          <tr>
            <td>M12/W13.5</td>
            <td>M12.5/W14</td>
          </tr>
          <tr>
            <td>M13/W14.5</td>
            <td>M14/W15.5</td>
          </tr>
          <tr>
            <td>M15/W16.5</td>
            <td>M16/W17.5</td>
          </tr>
          <tr>
            <td>M17/W18.5</td>
            <td>M18/W19.5</td>
          </tr>
      </tbody>
    </table>
  </div>
);


export default Sizes;
