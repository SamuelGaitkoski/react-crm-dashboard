import '../styles/topperformingcard.css';

import { DotsThreeOutlineVertical, Eye } from 'phosphor-react';

export const TopPerformingCard = () => {
    return (
        <div className='main-top-performing-card'>
            <div className='info-card-top-performing-card'>
                <h3>TOP PERFORMING</h3>
                <DotsThreeOutlineVertical weight="fill" className='icon-info-card-top-performing-card' />
            </div>
            <div className="table-wrapper">
                <table className='table-top-performing-card'>
                    <tr>
                        <th>User</th>
                        <th>Leads</th>
                        <th>Deals</th>
                        <th>Tasks</th>
                    </tr>
                    <tr className='highlighted-line'>
                        <td>
                            <h5>Jeremy Young</h5>
                            <p>Senior Sales Executive</p>
                        </td>
                        <td>187</td>
                        <td>154</td>
                        <td>49</td>
                        <td>
                            <Eye weight='fill' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Thomas Krueger</h5>
                            <p>Senior Sales Executive</p>
                        </td>
                        <td>235</td>
                        <td>127</td>
                        <td>83</td>
                        <td>
                            <Eye weight='fill' />
                        </td>
                    </tr>
                    <tr className='highlighted-line'>
                        <td>
                            <h5>Pete Burdine</h5>
                            <p>Senior Sales Executive	</p>
                        </td>
                        <td>365</td>
                        <td>148</td>
                        <td>62</td>
                        <td>
                            <Eye weight='fill' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Mary Nelson</h5>
                            <p>Senior Sales Executive</p>
                        </td>
                        <td>753</td>
                        <td>159</td>
                        <td>258</td>
                        <td>
                            <Eye weight='fill' />
                        </td>
                    </tr>
                    <tr className='highlighted-line'>
                        <td>
                            <h5>Kevin Grove</h5>
                            <p>Senior Sales Executive</p>
                        </td>
                        <td>458</td>
                        <td>126</td>
                        <td>73</td>
                        <td>
                            <Eye weight='fill' />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}