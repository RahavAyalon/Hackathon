import React from 'react';
import { Table } from 'react-bootstrap';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

export default function Data() {
  return (
    <>
      <div
        style={{
          marginRight: '10%',
          marginLeft: '10%',
          marginTop: '60px',
          width: '80%',
          textAlign: 'center',
        }}
      >
        <div className={'buttonHolder'}>
          <button class={'btn1 linkstyle'}>
            <Link to="/meta_data.xlsx" target="_blank" download>
              Download Meta Data
            </Link>
          </button>
          <button class={'btn1 linkstyle'}>
            <Link to="/contents_by_sentence.xlsx" target="_blank" download>
              Download Parsed Content
            </Link>
          </button>
        </div>

        <Box color="white" p={1}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Title</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>07-04-2022</td>
                <td>
                  Russia-Ukraine war latest: Kremlin admits ‘significant’ troop
                  losses; Russia suspended from UN human rights council – live
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7mt3"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7mt3
                  </a>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>07-04-2022</td>
                <td>
                  Omicron variant does cause different symptoms from Delta,
                  study finds
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7p8d"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7p8d
                  </a>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>07-04-2022</td>
                <td>
                  West Ham 1-1 Lyon: Europa League quarter-final, first leg –
                  live reaction!
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zac"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zac
                  </a>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>07-04-2022</td>
                <td>
                  Last year I accidentally moved to New Zealand. This can be
                  blamed on love
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7t73"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7t73
                  </a>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>07-04-2022</td>
                <td>
                  Caroline Kennedy praises Australia’s bipartisan foreign policy
                  despite PM’s claims on Labor and China{' '}
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zh7"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zh7
                  </a>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>07-04-2022</td>
                <td>
                  Braga 1-0 Rangers: Europa League quarter-final, first leg – as
                  it happened
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7z95"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7z95
                  </a>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>07-04-2022</td>
                <td>
                  Barnes and Iheanacho fail to take chances as Leicester are
                  held by PSV
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pdc"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pdc
                  </a>
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td>07-04-2022</td>
                <td>
                  West Ham battle to Europa League draw with Lyon after
                  Cresswell’s red card
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pd6"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pd6
                  </a>
                </td>
              </tr>

              <tr>
                <td>9</td>
                <td>07-04-2022</td>
                <td>
                  Abel Ruiz’s winner gives Braga narrow first-leg victory over
                  Rangers
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pcq"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pcq
                  </a>
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td>07-04-2022</td>
                <td>
                  Tiger Woods stays steady as flashes of magic suggest there’s
                  more to come
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pet"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pet
                  </a>
                </td>
              </tr>

              <tr>
                <td>11</td>
                <td>07-04-2022</td>
                <td>
                  Morning mail: Russia suspended from UN human rights council,
                  fresh Aukus controversy, record frogs
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7q38"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7q38
                  </a>
                </td>
              </tr>

              <tr>
                <td>12</td>
                <td>07-04-2022</td>
                <td>
                  Ketanji Brown Jackson confirmed as first Black woman on US
                  supreme court – as it happened
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zny"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zny
                  </a>
                </td>
              </tr>

              <tr>
                <td>13</td>
                <td>07-04-2022</td>
                <td>
                  ‘So much joy’: Ketanji Brown Jackson’s confirmation lauded as
                  ray of hope
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pze"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pze
                  </a>
                </td>
              </tr>

              <tr>
                <td>14</td>
                <td>07-04-2022</td>
                <td>Corrections and clarifications</td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zy8"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zy8
                  </a>
                </td>
              </tr>

              <tr>
                <td>15</td>
                <td>07-04-2022</td>
                <td>
                  Zachary Rolfe’s ex-fiancee told detectives he spoke of getting
                  paid holiday if he shot someone, court documents show
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y6yty"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y6yty
                  </a>
                </td>
              </tr>

              <tr>
                <td>16</td>
                <td>07-04-2022</td>
                <td>
                  Union rejects pay rise of £1,500 for BT staff and plans strike
                  ballot
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zeg"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zeg
                  </a>
                </td>
              </tr>

              <tr>
                <td>17</td>
                <td>07-04-2022</td>
                <td>
                  Ketanji Brown Jackson makes history as first Black woman
                  confirmed to US supreme court
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7knj"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7knj
                  </a>
                </td>
              </tr>

              <tr>
                <td>18</td>
                <td>07-04-2022</td>
                <td>
                  Leaked emails reveal Manchester City received payments from
                  Abu Dhabi
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7q2x"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7q2x
                  </a>
                </td>
              </tr>

              <tr>
                <td>19</td>
                <td>07-04-2022</td>
                <td>
                  The wealth of Akshata Murty, Indian heiress and wife of Rishi
                  Sunak
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7z4x"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7z4x
                  </a>
                </td>
              </tr>

              <tr>
                <td>20</td>
                <td>07-04-2022</td>
                <td>
                  Eric Pickles asks Grenfell inquiry not to waste his time but
                  gets death toll wrong
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7q2d"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7q2d
                  </a>
                </td>
              </tr>

              <tr>
                <td>21</td>
                <td>07-04-2022</td>
                <td>
                  The Girl from Plainville: the unease of TV’s latest true crime
                  hit
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7n65"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7n65
                  </a>
                </td>
              </tr>

              <tr>
                <td>22</td>
                <td>07-04-2022</td>
                <td>
                  Akshata Murty may have avoided up to £20m in tax with non-dom
                  status
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zjp"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zjp
                  </a>
                </td>
              </tr>

              <tr>
                <td>23</td>
                <td>07-04-2022</td>
                <td>
                  County Championship day one: Surrey make solid start – as it
                  happened
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7m7h"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7m7h
                  </a>
                </td>
              </tr>

              <tr>
                <td>24</td>
                <td>07-04-2022</td>
                <td>
                  County Championship: Essex’s Cook and Browne ruffle Kent on
                  opening day
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pfp"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pfp
                  </a>
                </td>
              </tr>

              <tr>
                <td>25</td>
                <td>07-04-2022</td>
                <td>
                  Hedwig and the Angry Inch review – Divina De Campo brings drag
                  queen swagger to grunge musical
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pez"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pez
                  </a>
                </td>
              </tr>

              <tr>
                <td>26</td>
                <td>07-04-2022</td>
                <td>UK to announce fresh military aid package for Ukraine</td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7phm"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7phm
                  </a>
                </td>
              </tr>

              <tr>
                <td>27</td>
                <td>07-04-2022</td>
                <td>
                  Fears genocidal language in Russian media may prompt more war
                  crimes
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zpg"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zpg
                  </a>
                </td>
              </tr>

              <tr>
                <td>28</td>
                <td>07-04-2022</td>
                <td>
                  Ban for former Paralympian whose charity paid £1m to family
                  companies
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pcd"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pcd
                  </a>
                </td>
              </tr>

              <tr>
                <td>29</td>
                <td>07-04-2022</td>
                <td>
                  Police raid office in Unite union’s HQ in fraud investigation
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pc3"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pc3
                  </a>
                </td>
              </tr>

              <tr>
                <td>30</td>
                <td>07-04-2022</td>
                <td>
                  Customs IT meltdown adds to long delays at Channel crossings
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pxf"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pxf
                  </a>
                </td>
              </tr>

              <tr>
                <td>31</td>
                <td>07-04-2022</td>
                <td>
                  Video appears to show Ukrainian soldiers shooting Russian
                  prisoner of war
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pnp"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pnp
                  </a>
                </td>
              </tr>

              <tr>
                <td>32</td>
                <td>07-04-2022</td>
                <td>
                  Johnson’s political cowardice applies brake to cheap energy as
                  he bets on nuclear
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zm5"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zm5
                  </a>
                </td>
              </tr>

              <tr>
                <td>33</td>
                <td>07-04-2022</td>
                <td>
                  ‘Judge Jackson stands on the shoulders of giants’: women of
                  color on a day to celebrate
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7jng"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7jng
                  </a>
                </td>
              </tr>

              <tr>
                <td>34</td>
                <td>07-04-2022</td>
                <td>
                  Republicans’ ugly attacks on Ketanji Brown Jackson show lurch
                  to far right
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7yhp"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7yhp
                  </a>
                </td>
              </tr>

              <tr>
                <td>35</td>
                <td>07-04-2022</td>
                <td>
                  Ketanji Brown Jackson’s blazing trail to become the first
                  Black female justice
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7gj5"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7gj5
                  </a>
                </td>
              </tr>

              <tr>
                <td>36</td>
                <td>07-04-2022</td>
                <td>
                  Russia suspended from human rights council after UN general
                  assembly vote
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pf3"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pf3
                  </a>
                </td>
              </tr>

              <tr>
                <td>37</td>
                <td>07-04-2022</td>
                <td>The Guardian view on non-dom tax status: them not us</td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7p8c"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7p8c
                  </a>
                </td>
              </tr>

              <tr>
                <td>38</td>
                <td>07-04-2022</td>
                <td>
                  The Guardian view on Boris Johnson’s energy strategy: missed
                  opportunities
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7zat"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7zat
                  </a>
                </td>
              </tr>

              <tr>
                <td>39</td>
                <td>07-04-2022</td>
                <td>
                  Spain reverses plan to open borders to Britons without Covid
                  vaccine{' '}
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pcn"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pcn
                  </a>
                </td>
              </tr>

              <tr>
                <td>40</td>
                <td>07-04-2022</td>
                <td>
                  Sir Alex Ferguson’s Clan Des Obeaux wins Betway Bowl at
                  Aintree
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pk2"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pk2
                  </a>
                </td>
              </tr>

              <tr>
                <td>41</td>
                <td>07-04-2022</td>
                <td>
                  British man and son missing after dive off coast of Malaysia
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7pj7"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7pj7
                  </a>
                </td>
              </tr>

              <tr>
                <td>42</td>
                <td>07-04-2022</td>
                <td>
                  Trial of Greek pilot accused of murdering British wife
                  Caroline Crouch to begin
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7p9f"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7p9f
                  </a>
                </td>
              </tr>

              <tr>
                <td>43</td>
                <td>07-04-2022</td>
                <td>
                  Anna Karenina review – this striking, steamy, seductive ballet
                  is a masterpiece
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7t7a"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7t7a
                  </a>
                </td>
              </tr>

              <tr>
                <td>44</td>
                <td>07-04-2022</td>
                <td>
                  Australia relaxes summer ban on live sheep exports to Middle
                  East{' '}
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7mtb"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7mtb
                  </a>
                </td>
              </tr>

              <tr>
                <td>45</td>
                <td>07-04-2022</td>
                <td>
                  ‘Old-school, 1950s grandma food’: Australian chefs on reviving
                  retro recipes
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7n83"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7n83
                  </a>
                </td>
              </tr>

              <tr>
                <td>46</td>
                <td>07-04-2022</td>
                <td>
                  Australian Border Force searched 822 phones in 2021 despite
                  having no power to demand passcodes
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7m2v"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7m2v
                  </a>
                </td>
              </tr>

              <tr>
                <td>47</td>
                <td>07-04-2022</td>
                <td>
                  Craig Kelly billed taxpayers to fly to Melbourne anti-lockdown
                  rallies{' '}
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7n5v"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7n5v
                  </a>
                </td>
              </tr>

              <tr>
                <td>48</td>
                <td>07-04-2022</td>
                <td>
                  Spiderbait celebrate bandmate Janet English: ‘She’s one of the
                  greats of Australian music’
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7mpp"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7mpp
                  </a>
                </td>
              </tr>

              <tr>
                <td>49</td>
                <td>07-04-2022</td>
                <td>
                  No Hard Feelings by Genevieve Novak review – another
                  hot-mess-millennial novel
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7tde"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7tde
                  </a>
                </td>
              </tr>

              <tr>
                <td>50</td>
                <td>07-04-2022</td>
                <td>
                  What is Boris Johnson’s energy plan, and what is it missing?
                </td>
                <td>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.theguardian.com/p/y7p7t"
                    target="_blank"
                  >
                    https://www.theguardian.com/p/y7p7t
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Box>
      </div>
    </>
  );
}
