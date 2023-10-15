import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const CardPage = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="tabs">
                    <Link to="/your-cards/1" className="tab">
                        Your Cards
                    </Link>
                    <Link to="/all-cards" className="tab">
                        All Cards
                    </Link>
                    <Link to="/blocked-cards" className="tab">
                        Blocked Cards
                    </Link>
                </div>

                <Routes>
                    <Route exact path="/your-cards/:userId" component={YourCards} />
                    <Route exact path="/all-cards" component={AllCards} />
                    <Route exact path="/blocked-cards" component={BlockedCards} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

const YourCards = ({ match }) => {
    const userId = match.params.userId;
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observer = useRef();

    useEffect(() => {
        loadCards();

        // Cleanup observer when component unmounts
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [userId]);

    useEffect(() => {
        if (!loading && hasMore) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            };
            observer.current = new IntersectionObserver(handleObserver, options);
            if (observer.current) {
                observer.current.observe(document.querySelector('.loading'));
            }
        }
    }, [loading, hasMore]);

    const loadCards = async () => {
        setLoading(true);

        try {
            // Simulating API fetch with pagination
            const response = {
                data: [
                    {
                        name: 'Mixmax',
                        budget_name: 'Software subscription',
                        owner_id: 1,
                        spent: {
                            value: 100,
                            currency: 'SGD',
                        },
                        available_to_spend: {
                            value: 1000,
                            currency: 'SGD',
                        },
                        card_type: 'burner',
                        expiry: '9 Feb',
                        limit: 100,
                        status: 'active',
                    },
                    {
                        name: 'Quickbooks',
                        budget_name: 'Software subscription',
                        owner_id: 2,
                        spent: {
                            value: 50,
                            currency: 'SGD',
                        },
                        available_to_spend: {
                            value: 250,
                            currency: 'SGD',
                        },
                        card_type: 'subscription',
                        limit: 10,
                        status: 'active',
                    },
                ],
                page: 1,
                per_page: 10,
                total: 100,
            };

            // Filter cards based on the user ID
            const userCards = response.data.filter((card) => card.owner_id === Number(userId));

            setCards((prevCards) => [...prevCards, ...userCards]);
            setPage((prevPage) => prevPage + 1);
            setHasMore(response.page < response.total);
        } catch (error) {
            console.error('Error fetching cards:', error);
        }

        setLoading(false);
    };

    const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            loadCards();
        }
    };

    return (
        <div className="card-container">
            {cards.map((card) => (
                <div key={card.owner_id} className="card">
                    <div className="card-header">
                        <div className="card-type">
                            {card.card_type === 'burner' ? (
                                <img src="burner-icon.png" alt="Burner Icon" />
                            ) : (
                                <img src="subscription-icon.png" alt="Subscription Icon" />
                            )}
                        </div>
                        <div className="card-name">{card.name}</div>
                    </div>
                    <div className="card-details">
                        <div className="budget-name">Budget Name: {card.budget_name}</div>
                        {card.card_type === 'burner' ? (
                            <div className="expiry">Expiry: {card.expiry}</div>
                        ) : (
                            <div className="limit">Limit: {card.limit}</div>
                        )}
                        <div className="spent">Spent: {card.spent.value} {card.spent.currency}</div>
                        <div className="available">Available to Spend: {card.available_to_spend.value} {card.available_to_spend.currency}</div>
                        <div className="status">Status: {card.status}</div>
                    </div>
                </div>
            ))}

            {loading && <div className="loading">Loading...</div>}
        </div>
    );
};

const AllCards = () => {
    // AllCards component implementation remains the same
    // ...
}
const BlockedCards = () => {
    // BlockedCards component implementation remains the same
    // ...
}
export default CardPage;
