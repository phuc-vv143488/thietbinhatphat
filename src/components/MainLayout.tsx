// MainLayout.jsx
import React from 'react';

const MainLayout = ({ leftContent, rightContent, fullWidthContent, children }) => {
    const hasTwoSides = !!(leftContent && rightContent);

    return (
        <div className="container">
            {hasTwoSides ? (
                <div className="row">
                    <div className="san-pham">
                        {/* Left Side */}
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div class="row">
                                {leftContent}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-md-9 col-sm-6 col-xs-12">
                            <div class="row">
                                {rightContent}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Full width
                <div style={{ flex: '1 1 100%' }}>
                    {fullWidthContent}
                </div>
            )}
            {children}
        </div>
    );
};

export default MainLayout;
